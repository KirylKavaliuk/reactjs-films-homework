import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withConditionalRendering from 'utils/rendering';

import classNames from 'classnames';

import styles from './Message.scss';

class Message extends Component {
  timeout = null;

  componentDidMount() {
    const { closeMessage } = this.props;

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => closeMessage(), 4000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const {
      text, open, closeMessage,
    } = this.props;
    const classes = classNames(styles.message, { [styles.open]: open });

    return (
      <div className={ classes } onClick={ closeMessage }>{ text }</div>
    );
  }
}

Message.defaultProps = {
  open: false,
  text: '',
};

Message.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string,
};

export default withConditionalRendering(Message, 'text');
