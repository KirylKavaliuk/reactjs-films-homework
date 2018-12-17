import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon/Icon';

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
      <Icon name='search'/>
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
