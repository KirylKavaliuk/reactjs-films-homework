import React from 'react';
import PropTypes from 'prop-types';

import withConditionalRendering from 'utils/withConditionalRendering';

import Image from 'components/Image/Image';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';

import styles from './MovieItem.scss';

const MovieItem = ({ movie, genres }) => {
  const genres1 = movie.genre_ids
    .map(genreId => genres.find(genre => genre.id === genreId))
    .filter(genre => genre)
    .map(genre => genre.name)
    .slice(0, 3);

  // const _genres = genres.find(genre => genre.id === genre_id);

  /*
    { movie.genre_ids.map((genre_id, index) => (
      <span
        key={ index }
        className={ styles.genre }
      >
      </span>
    )) }
  */

  return (<div className={ styles.movieItem }>
    <div className={ styles.image }>
      <Image
        src={ `db/${movie.poster_path}` }
        className={ styles.poster }
      />
      <div className={ styles.onHover }>
        <Icon name='star'/>
        <Button label='View Now' />
      </div>
    </div>
    <div className={ styles.info }>
      <header className={ styles.title }>{movie.title}</header>
      <p className={ styles.genres }>
      { genres1.map((genre, index) => (
        <span
          key={ index }
          className={ styles.genre }
        >{ genre }</span>
      ))}
      </p>
      <div className={ styles.rating }>{ (movie.vote_average / 2).toPrecision(2) }</div>
    </div>
  </div>);
};

MovieItem.defaultProps = {
  value: 0,
};

MovieItem.propTypes = {
  value: PropTypes.number,
};

export default withConditionalRendering(MovieItem, ['movie']);
