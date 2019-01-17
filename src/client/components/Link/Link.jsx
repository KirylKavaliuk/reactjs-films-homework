import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Query from 'utils/url';

import styles from './Link.scss';

export default class _Link extends Component {
  render() {
    const query = new Query();
    query.removeParams('query');

    return (
      <Link
        className={ styles.link }
        to={{ pathname: this.props.to, search: query.toString() }}
      >{ this.props.children }</Link>
    );
  }
}

_Link.defaultProps = {
  saveSearch: true,
};

_Link.propTypes = {

};
