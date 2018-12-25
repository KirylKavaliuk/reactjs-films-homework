import React from 'react';

import styles from './Footer.scss';

const Footer = () => (
  <footer className={ styles.footer }>
    <h1 className={ styles.logo }> FILMS </h1>
    <span className={ styles.copy }>
      Copyright &copy; { new Date().getFullYear() } Kovalyuk Kirill
    </span>
  </footer>
);


export default Footer;
