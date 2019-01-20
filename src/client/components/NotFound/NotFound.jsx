import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer/Footer';

import styles from './NotFound.scss';

const NotFound = () => (
    <div className={ styles.notFound }>
      <div className={ styles.text }>
        <h1 className={ styles.header }>Error.</h1>
        <p className={ styles.description }>items is not found</p>
        { /* go to main link */ }
      </div>
    </div>
);

NotFound.defaultProps = {

};

NotFound.propTypes = {

};

export default NotFound;
