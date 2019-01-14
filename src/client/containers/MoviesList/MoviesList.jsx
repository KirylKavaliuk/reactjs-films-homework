import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import actionsMovies from 'actions/movies';

import Waypoint from 'react-waypoint';
import classNames from 'classnames';

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
    this.setState({ gridView: isGrid }, () => {
      const { url } = this.props.match;
      const { history } = this.context.router;

      history.push({
        pathname: url,
        search: `?view=${this.state.gridView ? 'grid' : 'list'}`,
      });
    });
  }

  enterEndOfList = () => {
    this.setState({ loading: true });
    this.props.loadMovies();
  }

  leaveEndOfList = () => {
    this.setState({ loading: false });
  }

  componentDidMount = () => {
    this.props.removeMovies();
  }

  setActiveStyleForLinks(sectionNumber) {
    const { url } = this.props.match;
    const sections = ['popular', 'top_rated', 'upcoming'];

    const index = sections.findIndex(_section => url.indexOf(_section) !== -1);

    const defaultSection = url === '/' && sectionNumber === 0;

    return classNames(
      styles.section,
      { [styles.activeLink]: index === sectionNumber || defaultSection },
    );
  }


  render() {
    const ListItem = this.state.gridView ? MovieGridItem : MovieListItem;

    return (
      <div className={ styles.moviesListWrapper }>
        <div className={ styles.moviesList } onChange={ this.genreChangeHandler }>
          <menu className={ styles.menu }>
            <div className={ styles.listControls }>
              <ul className={ styles.sections }>
                <Link to='/popular'><li className={ this.setActiveStyleForLinks(0) }>Trading</li></Link>
                <Link to='/top_rated'><li className={ this.setActiveStyleForLinks(1) }>Top Rated</li></Link>
                <Link to='/upcoming'><li className={ this.setActiveStyleForLinks(2) }>Coming soon</li></Link>
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
            onLeave={ this.leaveEndOfList }
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

MoviesList.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loadMovies: type => dispatch(actionsMovies.add(type)),
  removeMovies: () => dispatch(actionsMovies.remove()),
});

const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesList);
