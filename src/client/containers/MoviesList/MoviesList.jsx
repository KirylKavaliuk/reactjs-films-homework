import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Waypoint from 'react-waypoint';
import classNames from 'classnames';

import actionsMovies from 'actions/movies';

import ListControls from 'components/ListControls/ListControls';
import MovieGridItem from 'components/MovieGridItem/MovieGridItem';
import MovieListItem from 'components/MovieListItem/MovieListItem';
import Loading from 'components/Loading/Loading';

import Query from 'utils/url';

import styles from './MoviesList.scss';

class MoviesList extends Component {
  state = {
    gridView: true,
    loading: false,
  };

  componentWillReceiveProps(props) {
    const query = new Query();

    this.setState({ gridView: query.getParam('view') !== 'list' });
  }

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
    this.props.loadMovies(this.props.match);
  }

  leaveEndOfList = () => {
    this.setState({ loading: false });
  }

  componentDidMount = () => {
    this.props.removeMovies();
  }

  render() {
    const ListItem = this.state.gridView ? MovieGridItem : MovieListItem;

    return (
      <div className={ styles.moviesListWrapper }>
        <div className={ styles.moviesList } onChange={ this.genreChangeHandler }>
          <ListControls
            { ...this.props }
            gridView={ this.state.gridView }
            setView={ this.setView }
          />
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
  loadMovies: match => dispatch(actionsMovies.add(match)),
  removeMovies: () => dispatch(actionsMovies.remove()),
});

const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesList);
