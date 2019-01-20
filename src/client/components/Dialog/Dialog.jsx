import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import withConditionalRendering from 'utils/rendering';

import Loading from 'components/Loading/Loading';

import Link from 'components/Link/Link';

import classNames from 'classnames';

import styles from './Dialog.scss';

class Dialog extends Component {
  render() {
    return (
      <Link className={
        classNames(
          styles.dialog,
          { [styles.open]: this.props.open },
        )}
        clearParams={ ['trailer'] }
      >
        { this.props.children }
      </Link>
    );
  }
}

Dialog.defaultProps = {

};

Dialog.propTypes = {

};


export default withConditionalRendering(Dialog, 'children');
