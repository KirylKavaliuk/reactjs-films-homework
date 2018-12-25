import React from 'react';
import PropTypes from 'prop-types';

import styles from './Video.scss';

const Video = ({ src }) => (
  <div className={ styles.videoWrapper }>
    <iframe className={ styles.video} src={ src } allowFullScreen></iframe>
  </div>
);

Video.defaultProps = {
  value: 0,
};

Video.propTypes = {
  value: PropTypes.number,
};

export default Video;
