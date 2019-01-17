import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Loading from 'components/Loading/Loading';

import classNames from 'classnames';

import styles from './Dialog.scss';

const dialogPortal = document.getElementById('dialog');

export default class Dialog extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className={
        classNames(
          styles.dialog,
          { [styles.open]: this.props.open },
        )}
        onClick={ this.props.closeDialog }
      >
        { this.props.children }
      </div>,
      dialogPortal,
    );
  }
}

Dialog.defaultProps = {

};

Dialog.propTypes = {

};
