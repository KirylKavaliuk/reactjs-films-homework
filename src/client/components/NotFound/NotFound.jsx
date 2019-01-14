import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer/Footer';

import styles from './NotFound.scss';

const NotFound = () => (
    <div className={ styles.notFound }>
      <div className={ styles.text }>
        <h1 className={ styles.header }>Error 404.</h1>
        <p className={ styles.description }>page is not found</p>
      </div>
      <Footer/>
    </div>
);

NotFound.defaultProps = {

};

NotFound.propTypes = {

};

export default NotFound;
