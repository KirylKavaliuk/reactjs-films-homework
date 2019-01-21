import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link/Link';

import classNames from 'classnames';

import Icon from 'components/Icon/Icon';

import { getSection } from 'utils/url';

import styles from './Select.scss';

export default class Select extends Component {
  state = {
    open: false,
    value: 'Genre',
  };

  openHandler = () => {
    this.setState({ open: true });
  }

  closeHandler = () => {
    this.setState({ open: false });
  }

  componentWillReceiveProps(props) {
    const { genreId } = props.match.params;
    const value = props.genres.find(_genre => _genre.id === +genreId);

    this.setState({ value: value ? value.name : 'Genre' });
  }

  render() {
    return (
      <div
        className={
          classNames(
            styles.select,
            { [this.props.className]: this.props.className },
            { [styles.active]: this.props.match.url.includes('/genre') },
          )
        }
        onMouseLeave={ this.closeHandler }
      >
        <div className={ styles.main } onClick={ this.openHandler }>
          <span className={ styles.value }>{ this.state.value }</span>
          <Icon
            name='arrow'
            className={
              classNames(
                styles.arrow,
                { [styles.arrowOpen]: this.state.open },
              )
            }/>
        </div>
        <div className={
          classNames(
            styles.list,
            { [styles.listOpen]: this.state.open },
          )
        }>
          { this.props.genres.map(genre => (
            <Link
              key={ genre.id }
              className={ styles.item }
              onClick={ this.closeHandler }
              to={ `/genre/${genre.id}` }
              clearParams={ ['query', 'movie'] }
            >{ genre.name }</Link>
          )) }
        </div>
      </div>
    );
  }
}

Select.defaultProps = {
  genres: [],
  match: {},
};

Select.propTypes = {
  genres: PropTypes.array,
  match: PropTypes.object,
};
