import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/Image/Image';

import styles from './MovieItem.scss';

const MovieItem = ({ movie }) => (
  <div className={ styles.movieItem }>
    123
  </div>
);

/*

<img
        className={ styles.poster }
        src={ movie.poster_path }/>
      { movie.title }

*/

MovieItem.defaultProps = {
  value: 0,
};

MovieItem.propTypes = {
  value: PropTypes.number,
};

export default MovieItem;
