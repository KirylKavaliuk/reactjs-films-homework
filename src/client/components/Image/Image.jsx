import React from 'react';
import PropTypes from 'prop-types';

import withConditionalRendering from 'utils/rendering';

import classNames from 'classnames';

import styles from './Image.scss';

const Image = ({
  db, src, width, className,
}) => {
  const imageClasses = classNames(styles.image, className);
  let transformedSrc = src;

  if (db) {
    transformedSrc = `https://image.tmdb.org/t/p/w${width}/${src}`;
  }

  return (
    <img className={ imageClasses } src={ transformedSrc }/>
  );
};

Image.defaultProps = {
  db: false,
  src: '',
  width: 500,
  className: '',
};

Image.propTypes = {
  db: PropTypes.bool,
  src: PropTypes.string,
  width: PropTypes.number,
  className: PropTypes.string,
};

export default withConditionalRendering(Image, 'src');
