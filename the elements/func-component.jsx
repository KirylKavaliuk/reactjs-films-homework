import React from 'react';
import PropTypes from 'prop-types';

import styles from './Component.scss';

const Component = ({ prop1, prop2, prop3 }) => {
  return (
    <div>
      func component
    </div>
  );
};

Component.defaultProps = {
  value: 0,
};

Component.propTypes = {
  value: PropTypes.number,
};

export default Component;
