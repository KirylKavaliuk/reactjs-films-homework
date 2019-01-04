import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './Description.scss';

const Description = ({ open, text }) => (
  <div className={
    classNames(
      styles.description,
      { [styles.open]: open },
    ) }>
    { text }
  </div>
);

Description.defaultProps = {
  open: false,
  text: '',
};

Description.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string,
};

export default Description;
