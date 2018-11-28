import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Rating from 'Components/Rating/Rating';

import styles from './MovieDetails.scss';

export default class MovieDetails extends Component {
  render() {
    return (
      <section className={ styles.movieDetails }>
        <Rating/>
      </section>
    );
  }
}

MovieDetails.defaultProps = {

};

MovieDetails.propTypes = {

};
