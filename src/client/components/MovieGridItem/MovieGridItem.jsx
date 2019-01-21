import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withConditionalRendering from 'utils/rendering';
import { withDialogContext } from 'utils/dialog';

import classNames from 'classnames';

import Image from 'components/Image/Image';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';
import Video from 'components/Video/Video';
import Rating from 'components/Rating/Rating';
import Link from 'components/Link/Link';

import { getSection, Params } from 'utils/url';

import styles from './MovieGridItem.scss';

class MovieGridItem extends Component {
  state = {
    descriptionOpen: false,
  };

  toggleDescriptionHandler = () => {
    const { descriptionOpen } = this.state;
    this.setState({ descriptionOpen: !descriptionOpen });
  }

  shouldComponentUpdate = (nextProps, nextState) => (
    nextState.descriptionOpen !== this.state.descriptionOpen
  )

  render() {
    return (
      <div className={ styles.movieItem }>
        <Image
          db
          className={ styles.poster }
          width={ 1280 }
          src={ this.props.movie.poster_path }
        />

        { !this.state.descriptionOpen && <div className={ styles.more }>
          <Link params={{ trailer: this.props.movie.id }}>
            <div
              className={ styles.playButton }
            >
              <Icon
                className={ styles.playButtonIcon }
                name='play'
              />
              <h3 className={ styles.playButtonHeader }>Play Now</h3>
            </div>
          </Link>

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
            <Link params={{ movie: this.props.movie.id }}>
              <h1 title={ this.props.movie.title } className={ styles.title }>
                { this.props.movie.title }
              </h1>
            </Link>
            <p className={ styles.genres }>{
              this.props.movie.genres.slice(0, 3).map((genre, index) => (
                <Link className={ styles.genre } key={ index } to={ `/genre/${genre.id}` } clearParams={ ['query', 'movie'] }>
                  { genre.name }
                </Link>
              ))
            }</p>
            <div className={ styles.rating }>
            { (this.props.movie.vote_average / 2).toPrecision(2) }
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

          <Link params={{ trailer: this.props.movie.id }}>
            <Button
              label='Watch Now'
              className={ styles.watchButton }
            />
          </Link>
        </div>
      </div>
    );
  }
}

// //onClick={ () => this.props.openDialog(<Video id={ this.props.movie.id }/>) }

MovieGridItem.defaultProps = {
  movie: null,
  genres: [],
};

MovieGridItem.propTypes = {
  movie: PropTypes.object,
  genres: PropTypes.array,
};

export default withDialogContext(MovieGridItem);
