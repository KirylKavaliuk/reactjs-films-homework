import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import { Params, getSection } from 'utils/url';

import styles from './Link.scss';

export default class _Link extends Component {
  state = {
    to: '',
  }

  componentDidMount() {
    const to = this.props.to || getSection();

    this.setState({ to });
  }

  onHoverHandler = () => {
    const section = this.props.to || getSection();
    const search = new Params()
      .add(this.props.params)
      .remove(this.props.clearParams)
      .toString();

    this.setState({ to: `${section}${search}` });
  }

  render() {
    return (
      <Link
        onMouseEnter={ this.onHoverHandler }
        onClick={ this.props.onClick }
        to={ this.state.to }
        className={ classNames(styles.link, this.props.className) }
      >
        { this.props.children }
      </Link>
    );
  }
}

_Link.defaultProps = {
  params: {},
  clearParams: [],
};

_Link.propTypes = {

};
