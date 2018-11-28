import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Rating.scss';

export default class Rating extends Component {
  render() {
    return (
      <div className={ styles.rating }>
        Rating
      </div>
    );
  }
}

Rating.defaultProps = {

};

Rating.propTypes = {

};
