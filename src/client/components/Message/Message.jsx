import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import withConditionalRendering from 'utils/rendering';

import classNames from 'classnames';

import styles from './Message.scss';

class Message extends Component {
  timeout = null;

  componentDidMount() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.props.closeMessage(), 4000);
  }

  render() {
    const { text, open } = this.props;

    return (
      <div
        className={
          classNames(
            styles.message,
            { [styles.open]: open },
          )
        }
        onClick={ this.props.closeMessage }
      >
        { text }
      </div>
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
