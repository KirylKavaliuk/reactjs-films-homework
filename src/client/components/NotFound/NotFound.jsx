import React from 'react';

import Link from 'components/Link/Link';

import styles from './NotFound.scss';

const NotFound = () => (
  <div className={ styles.notFound }>
    <div className={ styles.text }>
      <h1 className={ styles.header }>Error.</h1>
      <p className={ styles.description }>items is not found</p>
      <Link to='/trading' className={ styles.link }>To tranding movies</Link>
    </div>
  </div>
);

export default NotFound;
