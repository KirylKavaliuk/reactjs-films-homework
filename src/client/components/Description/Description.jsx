import React from 'react';
import PropTypes from 'prop-types';

import withConditionalRendering from 'utils/rendering';

import classNames from 'classnames';

import styles from './Description.scss';

const Description = ({
  open, text,
}) => {
  const classes = classNames(
    styles.description,
    { [styles.open]: open },
  );

  return (
    <div className={ classes }>{ text }</div>
  );
};

Description.defaultProps = {
  open: false,
  text: '',
};

Description.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string,
};

export default withConditionalRendering(Description, 'text');
