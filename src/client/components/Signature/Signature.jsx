import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Signature.scss';

export default class Signature extends Component {
  render() {
    return (
      <div className={ styles.signature }>
        <header className={ styles.header }>Signature</header>

        <p className={ styles.name }>{ this.props.name }</p>
      </div>
    );
  }
}

Signature.defaultProps = {
  name: 'John Doe',
};

Signature.propTypes = {
  name: PropTypes.string,
};
