import React from 'react';
import PropTypes from 'prop-types';

import StarIcon from 'Icons/star.svg';

import styles from './Star.scss';

const Star = ({ active }) => {
  const activeClass = active ? styles.active : '';

  return (
    <div className={ `${styles.star} ${activeClass}` }>
      <StarIcon/>
    </div>
  );
};

Star.defaultProps = {
  active: false,
};

Star.propTypes = {
  active: PropTypes.bool,
};

export default Star;
