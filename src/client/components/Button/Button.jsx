import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './Button.scss';

const Button = ({
  className, label, onClick, transparent, active,
}) => {
  const classes = classNames(
    styles.button,
    className,
    { [styles.transparent]: transparent },
    { [styles.active]: active },
  );

  return (
    <button className={ classes } onClick={ onClick }>{ label }</button>
  );
};

Button.defaultProps = {
  transparent: false,
  active: false,
  onClick: () => {},
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  transparent: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
