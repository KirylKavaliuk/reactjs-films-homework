import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withConditionalRendering from 'utils/withConditionalRendering';
import { withDialogContext } from 'utils/dialog';

import classNames from 'classnames';

import Image from 'components/Image/Image';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';
import Video from 'components/Video/Video';
import Rating from 'components/Rating/Rating';

import styles from './MovieItem.scss';

class MovieItem extends Component {
  state = {
    descriptionOpen: false,
  };

  toggleDescriptionHandler = () => {
    const { descriptionOpen } = this.state;
    this.setState({ descriptionOpen: !descriptionOpen });
  }

  render() {
    const genres = this.props.movie.genre_ids
      .map(genreId => this.props.genres.find(genre => genre.id === genreId))
      .filter(genre => genre)
      .map(genre => genre.name)
      .slice(0, 3);

    return (
      <div className={ classNames(
        styles.movieItem,
        { [styles.grid]: this.props.gridView },
        { [styles.list]: !this.props.gridView },
      ) }>
        <Image
          className={ styles.poster }
          width={ 1280 }
          src={ this.props.gridView ? `db/${this.props.movie.poster_path}` : `db/${this.props.movie.backdrop_path}` }
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
            <h1 className={ styles.title }>{ this.props.movie.title }</h1>
            <p className={ styles.genres }>{
              genres.map(genre => (
                <span className={ styles.genre }>
                  { genre }
                </span>
              ))
            }</p>
            <div className={ styles.rating }>
          { this.props.gridView
            ? (this.props.movie.vote_average / 2).toPrecision(2)
            : <Rating value={ this.props.movie.vote_average / 2 }/> }
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

MovieItem.defaultProps = {
  movie: null,
  genres: [],
};

MovieItem.propTypes = {
  movie: PropTypes.object,
  genres: PropTypes.array,
};

export default withConditionalRendering(
  withDialogContext(MovieItem),
  ['movie'],
);
