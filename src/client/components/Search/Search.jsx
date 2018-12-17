import React from 'react';
import PropTypes from 'prop-types';

import SearchIcon from 'icons/search.svg';

import styles from './Search.scss';

const Search = ({ value, onChange }) => (
  <form
    name='search'
    className={ styles.search }
  >
    <input
      className={ styles.searchField }
      type='search'
      value={ value }
      onChange={ onChange }
      placeholder='Search...'
    />
    <button className={ styles.searchButton }>
      <SearchIcon/>
    </button>
  </form>
);


Search.defaultProps = {
  value: '',
};

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Search;
