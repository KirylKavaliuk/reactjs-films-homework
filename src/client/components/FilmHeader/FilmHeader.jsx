import React from 'react';
import PropTypes from 'prop-types';

import withConditionalRendering from 'utils/rendering';

import styles from './FilmHeader.scss';

const FilmHeader = ({
  name, genres, duration,
}) => {
  const absoluteDuration = Math.abs(duration);
  const hours = Math.floor(absoluteDuration / 60);
  const minutes = (absoluteDuration % 60).toFixed();

  const getGenres = () => (
    genres.reduce((_genres, genre) => (
      _genres.concat(` ${genre.name}`)
    ), '')
  );

  const getDuration = () => (
    `${+hours === 0 ? null : `${hours}h`} ${+minutes === 0 ? null : `${minutes}m`}`
  );

  return (
    <div className={ styles.filmHeader }>
      <h2 className={ styles.name }>{ name }</h2>
      <div className={ styles.info }>
        { getGenres() } | { getDuration() }
      </div>
    </div>
  );
};

FilmHeader.propTypes = {
  name: PropTypes.string,
  genres: PropTypes.array,
  duration: PropTypes.number,
};

FilmHeader.defaultProps = {
  name: '',
  genres: [],
  duration: 0,
};

export default withConditionalRendering(FilmHeader, 'genres');
