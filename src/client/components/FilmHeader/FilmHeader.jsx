import React from 'react';

import PropTypes from 'prop-types';

import styles from './FilmHeader.scss';

const FilmHeader = ({ name, genres, duration }) => {
  const absoluteDuration = Math.abs(duration);
  const hours = Math.floor(absoluteDuration / 60);
  const minutes = (absoluteDuration % 60).toFixed();

  return (
    <div className={ styles.filmHeader }>
      <h2 className={ styles.name }>{ name }</h2>
      <p className={ styles.genres }>
        { genres.map((genre, index) => (
          <span
            key={ index }
            className={ styles.genre }
          >{ genre }</span>
        )) }
        { !!duration && <span className={ styles.duration }>
            { +hours === 0 ? null : `${hours} h`} { +minutes === 0 ? null : `${minutes} m` }
          </span>
        }
      </p>
    </div>
  );
};

FilmHeader.propTypes = {
  name: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.number.isRequired,
};

export default FilmHeader;
