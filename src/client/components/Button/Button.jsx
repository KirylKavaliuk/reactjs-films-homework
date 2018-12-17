import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './Button.scss';

const Button = ({ label, onClick, transparent }) => (
  <button
    className={ classNames(
      styles.button,
      { [styles.transparent]: transparent },
    ) }
    onClick={ onClick }
  >
    { label }
  </button>
);

Button.defaultProps = {
  transparent: false,
  onClick: null,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  transparent: PropTypes.bool,
};

export default Button;
