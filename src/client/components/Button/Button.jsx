import React from 'react';

import styles from './Button.scss';

const Button = ({ label, onClick, transparent }) => {
  const transparentClass = transparent ? styles.transparent : '';

  return <button
    className={ `${styles.button} ${transparentClass}`}
    onClick={ onClick }
  >
    { label }
  </button>;
};

export default Button;
