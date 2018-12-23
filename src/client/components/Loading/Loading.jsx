import React from 'react';

import styles from './Loading.scss';

const Loading = () => (
  <div className={ styles.loading }>
    <div className={ styles.icons }>
      <div className={ styles.icon }>
        <div className={ styles.circle }/>
      </div>
      <div className={ styles.icon }>
        <div className={ styles.circle }/>
      </div>
      <div className={ styles.icon }>
        <div className={ styles.circle }/>
      </div>
    </div>
    <span className={ styles.text }>Loading</span>
  </div>
);

export default Loading;
