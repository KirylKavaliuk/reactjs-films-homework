import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Component.scss';

export default class _Component extends Component {
  render() {
    return (
      <div className={ styles.component }>
        _Component
      </div>
    );
  }
}

_Component.defaultProps = {

};

_Component.propTypes = {

};
