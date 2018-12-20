import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Select.scss';

export default class Select extends Component {
  state = {
    open: true,
  };

  clickHandler = (event) => {
    this.setState({ open: true });
  }

  render() {
    return (
      <div
        className={ styles.select }
        onClick={ this.clickHandler }
      >
        Select
      </div>
    );
  }
}

Select.defaultProps = {

};

Select.propTypes = {

};
