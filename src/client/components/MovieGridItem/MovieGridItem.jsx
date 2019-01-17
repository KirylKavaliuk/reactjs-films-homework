import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import withConditionalRendering from 'utils/rendering';
import { withDialogContext } from 'utils/dialog';

import classNames from 'classnames';

import Image from 'components/Image/Image';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';
import Video from 'components/Video/Video';
import Rating from 'components/Rating/Rating';

import styles from './MovieGridItem.scss';

class MovieGridItem extends Component {
  state = {
    descriptionOpen: false,
  };

  toggleDescriptionHandler = () => {
    const { descriptionOpen } = this.state;
    this.setState({ descriptionOpen: !descriptionOpen });
  }

  render() {
    return (
      <div className={ styles.movieItem }>
        <Image
          className={ styles.poster }
          width={ 1280 }
          src={ `db/${this.props.movie.poster_path}` }
        />

        { !this.state.descriptionOpen && <div className={ styles.more }>
          <div
            className={ styles.playButton }
            onClick={ () => this.props.openDialog(<Video id={ this.props.movie.id }/>) }
          >
            <Icon
              className={ styles.playButtonIcon }
              name='play'
            />
            <h3 className={ styles.playButtonHeader }>Play Now</h3>
          </div>

          <Button
            label='View Info'
            transparent
            onClick={ this.toggleDescriptionHandler }
          />
        </div>
        }

        <div className={
          classNames(
            styles.info,
            { [styles.infoVisible]: this.state.descriptionOpen },
          )}
        >
          <div className={
              classNames(
                styles.cancelIcon,
                { [styles.cancelIconVisible]: this.state.descriptionOpen },
              )
            }
            onClick={ this.toggleDescriptionHandler }
          >
            <Icon name='cancel' />
          </div>

          <header className={
            classNames(
              styles.header,
              { [styles.headerOffset]: this.state.descriptionOpen },
            )
          }>
            <Link to={`/trading/movie/${this.props.movie.id}`}><h1 className={ styles.title }>{ this.props.movie.title }</h1></Link>
            <p className={ styles.genres }>{
              this.props.movie.genres.slice(0, 3).map((genre, index) => (
                <span key={ index } className={ styles.genre }>
                  { genre.name }
                </span>
              ))
            }</p>
            <div className={ styles.rating }>
            { (this.props.movie.vote_average).toPrecision(2) }
            </div>
          </header>

          <p className={
            classNames(
              styles.descriptionText,
              { [styles.descriptionTextVisible]: !this.state.descriptionOpen },
            )
          }>
            { this.props.movie.overview }
          </p>

          <Button
            label='Watch Now'
            className={ styles.watchButton }
            onClick={ () => this.props.openDialog(<Video id={ this.props.movie.id }/>) }
          />
        </div>
      </div>
    );
  }
}

MovieGridItem.defaultProps = {
  movie: null,
  genres: [],
};

MovieGridItem.propTypes = {
  movie: PropTypes.object,
  genres: PropTypes.array,
};

export default withDialogContext(MovieGridItem);
