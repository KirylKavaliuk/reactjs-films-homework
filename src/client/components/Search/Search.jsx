import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Params, getParam } from 'utils/url';

import Icon from 'components/Icon/Icon';

import styles from './Search.scss';

export default class Search extends Component {
  state = {
    searchQuery: '',
    searchQueryValid: true,
  };

  componentDidMount() {
    const query = getParam('query');

    this.setState({ searchQuery: query ? decodeURI(query) : '' });
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
    const { searchQuery } = this.state;

    this.setState({ searchQueryValid: searchQuery.length > 1 }, () => {
      const params = new Params();

      if (this.state.searchQueryValid) {
        params
          .remove(['trailer', 'movie'])
          .add({ query: searchQuery });
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
    const { searchQueryValid, searchQuery } = this.state;

    const inputClasses = classNames(
      styles.searchField,
      { [styles.searchNotValid]: !searchQueryValid },
    );

    return (
      <form name='search' className={ styles.search }>
        <input
          className={ inputClasses }
          type='search'
          value={ searchQuery }
          onChange={ this.onChangeHandler }
          placeholder='Search...'
        />
        <button className={ styles.searchButton } onClick={ this.onSearchHandler }>
          <Icon name='search'/>
        </button>
      </form>
    );
  }
}

Search.contextTypes = {
  router: PropTypes.object.isRequired,
};
