import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withDialogContext } from 'utils/dialog';
import withConditionalRendering from 'utils/rendering';

import Image from 'components/Image/Image';
import Button from 'components/Button/Button';
import Rating from 'components/Rating/Rating';
import Link from 'components/Link/Link';

import styles from './MovieListItem.scss';

const MovieListItem = ({ movie }) => (
  <div className={ styles.movieItem }>
    <Image
      db
      className={ styles.poster }
      width={ 1280 }
      src={ movie.backdrop_path }
    />

    <div className={ styles.info }>
      <header className={ styles.header}>
        <h1 className={ styles.title }>{ movie.title }</h1>
        <p className={ styles.genres }>
          { movie.genres.slice(0, 3).map((genre, index) => (
              <Link
                className={ styles.genre }
                key={ index }
                to={ `/genre/${genre.id}` }
                clearParams={ ['query', 'movie'] }
              >
                { genre.name }
              </Link>
          )) }
          </p>
        <div className={ styles.rating }>
          <Rating value={ movie.vote_average / 2 }/>
        </div>
      </header>

      <p className={ styles.descriptionText }>
        { movie.overview }
      </p>

      <Link params={{ trailer: movie.id }}>
        <Button
          label='Watch Now'
          className={ styles.watchButton }
        />
      </Link>
    </div>
  </div>
);

MovieListItem.defaultProps = {
  movie: null,
};

MovieListItem.propTypes = {
  movie: PropTypes.object,
};

export default withDialogContext(withConditionalRendering(MovieListItem, 'movie'));
