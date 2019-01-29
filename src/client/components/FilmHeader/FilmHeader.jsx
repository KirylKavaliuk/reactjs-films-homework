import React from 'react';
import PropTypes from 'prop-types';

import withConditionalRendering from 'utils/rendering';

import styles from './FilmHeader.scss';

const FilmHeader = ({ name, genres, duration }) => {
  const absoluteDuration = Math.abs(duration);
  const hours = Math.floor(absoluteDuration / 60);
  const minutes = (absoluteDuration % 60).toFixed();

  const renderGenres = () => (
    genres.map((genre, index) => (
      <span
        key={ index }
        className={ styles.genre }
      >{ genre }</span>))
  );

  const setDuration = () => (
    duration && <span className={ styles.duration }>
      { +hours === 0 ? null : `${hours} h`} { +minutes === 0 ? null : `${minutes} m` }
    </span>
  );

  return (
    <div className={ styles.filmHeader }>
      <h2 className={ styles.name }>{ name }</h2>
      <div className={ styles.info }>
        { renderGenres() }
        { setDuration() }
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
  duration: 0,
};

export default withConditionalRendering(FilmHeader, 'genres');
