import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.scss';

const Image = ({ src }) => {
  let transformSrc = src;
  const key = src.match(/\w+\//)[0];
  const rest = src.substring(src.indexOf(key) + key.length);

  if (key === 'db/') {
    transformSrc = `https://image.tmdb.org/t/p/w500/${rest}`;
  }

  return (
    <img
      className={ styles.image }
      src={transformSrc}
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
