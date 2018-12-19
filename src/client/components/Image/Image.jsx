import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './Image.scss';

const Image = ({ src, className }) => {
  let transformSrc = src;
  const match = src.match(/\w+\//);

  if (match) {
    const key = match[0];

    if (key === 'db/') {
      const rest = src.substring(src.indexOf(key) + key.length);
      transformSrc = `https://image.tmdb.org/t/p/w500/${rest}`;
    }
  }

  return (
    <img
      className={ classNames(
        styles.image,
        className,
      ) }
      src={ transformSrc }
    />
  );
};

Image.defaultProps = {
  src: '',
};

Image.propTypes = {
  src: PropTypes.string,
};

export default Image;
