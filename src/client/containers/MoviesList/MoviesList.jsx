import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import Icon from 'components/Icon/Icon';

import styles from './MoviesList.scss';

export default class MoviesList extends Component {
  state = {
    gridView: false,
  };

  render() {
    return (
      <div className={ styles.moviesListWrapper }>
        <div onChange={ this.genreChangeHandler } className={ styles.moviesList }>
          <menu className={ styles.menu}>
            <div className={ styles.controls }>
              <ul className={ styles.menuLinks }>
                <Link
                  to='/trading'
                  className={ styles.menuLink }
                >
                  <li>Trading</li>
                </Link>
                <Link
                  to='/top-rated'
                  className={
                    classNames(
                      styles.menuLink,
                      styles.activeLink,
                    )
                  }
                >
                  <li>Top Rated</li>
                </Link>
                <Link
                  to='/coming-soon'
                  className={ styles.menuLink }
                >
                  <li>Coming soon</li>
                </Link>
              </ul>
            </div>
            <div className={ styles.typesView }>
            <div className={ styles.typeView }>
              <Icon name='star'/>
            </div>
            <div className={ styles.typeView }>
              <Icon name='star'/>
            </div>
          </div>
          </menu>
        </div>
      </div>
    );
  }
}

MoviesList.defaultProps = {

};

MoviesList.propTypes = {

};
