import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import withConditionalRendering from 'utils/rendering';

import Link from 'components/Link/Link';

import styles from './Dialog.scss';

const Dialog = ({
  open, children,
}) => {
  const classes = classNames(
    styles.dialog,
    { [styles.open]: open },
  );

  return (
    <Link className={ classes } clearParams={ ['trailer'] }>{ children }</Link>
  );
};

Dialog.defaultProps = {
  children: null,
  open: false,
};

Dialog.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
};

export default withConditionalRendering(Dialog, 'children');
