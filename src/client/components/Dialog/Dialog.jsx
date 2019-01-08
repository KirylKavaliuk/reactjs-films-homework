import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loading from 'components/Loading/Loading';

import classNames from 'classnames';

import styles from './Dialog.scss';

export default class Dialog extends Component {
  render() {
    return (
      <div className={
        classNames(
          styles.dialog,
          { [styles.open]: this.props.open },
        )}
        onClick={ this.props.closeDialog }
      >

        <Loading className={ styles.loading }/>

        { this.props.component }
      </div>
    );
  }
}

Dialog.defaultProps = {

};

Dialog.propTypes = {

};
