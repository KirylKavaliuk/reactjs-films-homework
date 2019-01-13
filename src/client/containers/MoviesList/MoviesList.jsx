import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import actionsMovies from 'actions/movies';

import Waypoint from 'react-waypoint';
import classNames from 'classnames';

import request from 'utils/request';

import Select from 'components/Select/Select';
import Loading from 'components/Loading/Loading';
import MovieGridItem from 'components/MovieGridItem/MovieGridItem';
import MovieListItem from 'components/MovieListItem/MovieListItem';
import Icon from 'components/Icon/Icon';

import styles from './MoviesList.scss';

class MoviesList extends Component {
  state = {
    gridView: true,
    loading: false,
  };

  setView = (isGrid) => {
    this.setState({ gridView: isGrid });
  }

  enterEndOfList = () => {
    this.setState({ loading: true });
    this.props.loadMovies();
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
              <ul className={ styles.sections }>
                <li className={ styles.section }>Trading</li>
                <li className={ styles.section }>Top Rated</li>
                <li className={ styles.section }>Coming soon</li>
              </ul>
              <Select
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

MoviesList.defaultProps = {

};

MoviesList.propTypes = {

};

const mapDispatchToProps = dispatch => ({
  loadMovies: () => dispatch(actionsMovies.addMovies()),
});

const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesList);
