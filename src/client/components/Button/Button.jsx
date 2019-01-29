import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './Button.scss';

const Button = ({
  className,
  label,
  onClick,
  transparent,
  active,
}) => (
  <button
    className={ classNames(
      styles.button,
      className,
      { [styles.transparent]: transparent },
      { [styles.active]: active },
    ) }
    onClick={ onClick }
  >
    { label }
  </button>
);

Button.defaultProps = {
  onClick: null,
  transparent: false,
  active: false,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  transparent: PropTypes.bool,
  active: PropTypes.bool,
};

export default Button;
