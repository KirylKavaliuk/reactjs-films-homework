import React from 'react';
import PropTypes from 'prop-types';

import styles from './Description.scss';

const Description = ({ text }) => (
  <div className={ styles.description }>
    { text }
  </div>
);

Description.defaultProps = {
  text: '',
};

Description.propTypes = {
  text: PropTypes.string,
};

export default Description;
