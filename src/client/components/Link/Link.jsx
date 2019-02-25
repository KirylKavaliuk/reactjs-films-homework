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
    const {
      to, params, clearParams,
    } = this.props;

    const section = to || getSection();
    const search = new Params()
      .add(params)
      .remove(clearParams)
      .toString();

    this.setState({ to: `${section}${search}` });
  }

  render() {
    const {
      onClick, className, children,
    } = this.props;
    const { to } = this.state;
    const classes = classNames(styles.link, className);

    return (
      <Link
        onMouseEnter={ this.onHoverHandler }
        onClick={ onClick }
        to={ to }
        className={ classes }
      >
        { children }
      </Link>
    );
  }
}

_Link.defaultProps = {
  params: {},
  clearParams: [],
  to: '',
  className: '',
};

_Link.propTypes = {
  params: PropTypes.object,
  clearParams: PropTypes.array,
  to: PropTypes.string,
  className: PropTypes.string,
};
