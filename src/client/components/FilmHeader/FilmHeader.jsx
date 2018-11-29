import React from 'react';

import PropTypes from 'prop-types';

import styles from './FilmHeader.scss';

const FilmHeader = ({ name, genres, duration }) => (
  <div className={ styles.filmHeader }>
    <h2 className={ styles.name }>{ name }</h2>
    <p className={ styles.genres }>
      { genres.map((genre, index) => <span
          key={ index }
          className={ styles.genre }
        >{ genre }</span>)
      }
      <span className={ styles.duration }>
        {`${Math.floor(duration / 60)} h ${(duration % 60).toPrecision(2)} m`}
      </span>
    </p>
  </div>
);

FilmHeader.propTypes = {
  name: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.number.isRequired,
};

export default FilmHeader;
