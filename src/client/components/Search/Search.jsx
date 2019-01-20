import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Params, getParam } from 'utils/url';

import classNames from 'classnames';

import Icon from 'components/Icon/Icon';

import styles from './Search.scss';

export default class Search extends Component {
  state = {
    searchQuery: '',
    searchQueryValid: true,
  };

  componentDidMount() {
    const query = getParam('query');

    this.setState({ searchQuery: query || '' });
  }

  onChangeHandler = (event) => {
    this.setState({
      searchQuery: event.target.value,
      searchQueryValid: true,
    });
  }

  onSearchHandler = (event) => {
    event.preventDefault();
    const { history } = this.context.router;

    this.setState({ searchQueryValid: this.state.searchQuery.length > 1 }, () => {
      const params = new Params();

      if (this.state.searchQueryValid) {
        params
          .remove(['trailer', 'movie'])
          .add({ query: this.state.searchQuery });
      } else {
        params.remove(['query']);
      }

      history.push({
        pathname: '/search',
        search: params.toString(),
      });
    });
  }

  render() {
    return (
      <form name='search' className={ styles.search }>
        <input
          className={ classNames(
            styles.searchField,
            { [styles.searchNotValid]: !this.state.searchQueryValid },
          )}
          type='search'
          value={ this.state.searchQuery }
          onChange={ this.onChangeHandler }
          placeholder='Search...'
        />
        <button
          className={ styles.searchButton }
          onClick={ this.onSearchHandler }
        >
          <Icon name='search'/>
        </button>
      </form>
    );
  }
}

Search.contextTypes = {
  router: PropTypes.object.isRequired,
};
