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

import styles from './MovieListItem.scss';

class MovieListItem extends Component {
  render() {
    return (
      <div className={ styles.movieItem }>
        <Image
          db
          className={ styles.poster }
          width={ 1280 }
          src={ this.props.movie.backdrop_path }
        />

        <div className={
          classNames(
            styles.info,
          )}
        >
          <header className={
            classNames(
              styles.header,
            )
          }>
            <h1 className={ styles.title }>{ this.props.movie.title }</h1>
            <p className={ styles.genres }>{
              this.props.movie.genres.slice(0, 3).map((genre, index) => (
                <Link className={ styles.genre } key={ index } to={ `/genre/${genre.id}` } clearParams={ ['query', 'movie'] }>
                  { genre.name }
                </Link>
              ))
            }</p>
            <div className={ styles.rating }>
              <Rating value={ this.props.movie.vote_average / 2 }/>
            </div>
          </header>

          <p className={
            classNames(
              styles.descriptionText,
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

MovieListItem.defaultProps = {
  movie: null,
  genres: [],
};

MovieListItem.propTypes = {
  movie: PropTypes.object,
  genres: PropTypes.array,
};

export default withDialogContext(MovieListItem);
