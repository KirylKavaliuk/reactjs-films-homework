import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withConditionalRendering from 'utils/rendering';

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
  children: null,
  open: false,
};

Dialog.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
};


export default withConditionalRendering(Dialog, 'children');
