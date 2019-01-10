import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Waypoint from 'react-waypoint';
import classNames from 'classnames';

import request from 'utils/request';

import Select from 'components/Select/Select';
import Loading from 'components/Loading/Loading';
import MovieGridItem from 'components/MovieGridItem/MovieGridItem';
import MovieListItem from 'components/MovieListItem/MovieListItem';
import Icon from 'components/Icon/Icon';

import styles from './MoviesList.scss';

export default class MoviesList extends Component {
  state = {
    gridView: true,
    loading: false,
  };

  setView = (isGrid) => {
    this.setState({ gridView: isGrid });
  }

  isActiveLink = substring => (
    this.context.router.route.location.pathname.includes(substring)
  )

  enterEndOfList = () => {
    this.setState({ loading: true });
    this.props.addMovies();
  }

  leaveEndoFList = () => {
    this.setState({ loading: false });
  }

  render() {
    const ListItem = this.state.gridView ? MovieGridItem : MovieListItem;

    return (
      <div className={ styles.moviesListWrapper }>
        <div className={ styles.moviesList } onChange={ this.genreChangeHandler }>
          <menu className={ styles.menu }>
            <div className={ styles.listControls }>
              <ul className={ styles.menuLinks }>
                <Link
                  to='/trading'
                  className={
                    classNames(
                      styles.menuLink,
                      { [styles.activeLink]: this.isActiveLink('trading') },
                    )
                  }
                >
                  <li>Trading</li>
                </Link>
                <Link
                  to='/top-rated'
                  className={
                    classNames(
                      styles.menuLink,
                      { [styles.activeLink]: this.isActiveLink('top-rated') },
                    )
                  }
                >
                  <li>Top Rated</li>
                </Link>
                <Link
                  to='/coming-soon'
                  className={
                    classNames(
                      styles.menuLink,
                      { [styles.activeLink]: this.isActiveLink('coming-soon') },
                    )
                  }
                >
                  <li>Coming soon</li>
                </Link>
              </ul>
              <Select
                 className={
                  classNames(
                    { [styles.activeSelect]: this.isActiveLink('genre') },
                  )
                }
                defaultValue='Genre'
                isLinks={ true }
                list={ this.props.genres }
                element={ item => ({
                  value: item.id,
                  label: item.name,
                  link: `/genre/${item.id}`,
                }) }
              />
            </div>
            <div className={ styles.typesView }>
              <div
                className={ classNames(
                  styles.typeView,
                  { [styles.activeTypeView]: this.state.gridView },
                ) }
                onClick={ () => this.setView(true) }
              >
                <Icon name='grid-view'/>
              </div>
              <div
                className={ classNames(
                  styles.typeView,
                  { [styles.activeTypeView]: !this.state.gridView },
                ) }
                onClick={ () => this.setView(false) }
              >
                <Icon name='list-view'/>
              </div>
            </div>
          </menu>
          <div className={
            classNames(
              { [styles.grid]: this.state.gridView },
              { [styles.list]: !this.state.gridView },
            )}>
            { this.props.movies.map((_movie, index) => (
                <ListItem
                  key={ index }
                  movie={ _movie }
                />
            )) }
          </div>
          { this.state.loading && <Loading/> }
          <Waypoint
            onEnter={ this.enterEndOfList }
            onLeave={ this.leaveEndoFList }
          />
        </div>
      </div>
    );
  }
}

MoviesList.contextTypes = {
  router: PropTypes.object.isRequired,
};

MoviesList.defaultProps = {

};

MoviesList.propTypes = {

};
