import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withDialogContext } from 'utils/dialog';

import Waypoint from 'react-waypoint';
import classNames from 'classnames';

import actionsMovies from 'actions/movies';
import actionsMovieDetails from 'actions/movieDetails';

import ListControls from 'components/ListControls/ListControls';
import MovieGridItem from 'components/MovieGridItem/MovieGridItem';
import MovieListItem from 'components/MovieListItem/MovieListItem';
import Loading from 'components/Loading/Loading';
import Video from 'components/Video/Video';

import { getParam } from 'utils/url';

import styles from './MoviesList.scss';

class MoviesList extends Component {
  state = {
    gridView: true,
    loading: false,
    trailer: null,
    query: null,
  };

  componentDidMount = () => {
    this.props.removeMovies();
  }

  componentWillReceiveProps(props) {
    const trailer = getParam('trailer');
    const movie = getParam('movie');
    const gridView = getParam('view') !== 'list';
    const query = getParam('query');

    if (this.state.trailer !== trailer) {
      this.setState({ trailer }, () => {
        if (this.state.trailer) {
          this.props.openDialog(<Video id={ +trailer }/>);
        } else {
          this.props.closeDialog();
        }
      });
    }

    if (this.props.movie.id !== +movie) {
      this.setDetailsMovie(props, +movie);
    }

    if (this.state.gridView !== gridView) {
      this.setState({ gridView });
    }

    if (this.props.match.params.genreId !== props.match.params.genreId) {
      const { height } = document.getElementById('movie-details').getBoundingClientRect();

      window.scrollTo(0, height);
      this.props.removeMovies();
    }

    if (this.state.query !== query) {
      this.setState({ query }, () => {
        this.props.removeMovies();
        this.props.loadMovies(this.props.match);
      });
    }
  }

  setDetailsMovie = (props, id) => {
    const movie = props.movies.find(_movie => id === _movie.id);

    if (id && id !== +this.props.movie.id) {
      window.scroll(0, 0);
    }

    this.props.setMovieDetails(movie, {
      movie: props.movies[0],
      id,
    });
  }

  enterEndOfList = () => {
    this.setState({ loading: true });
    this.props.loadMovies(this.props.match);
  }

  leaveEndOfList = () => {
    this.setState({ loading: false });
  }

  render() {
    const ListItem = this.state.gridView ? MovieGridItem : MovieListItem;

    return (
      <div id='movies-list' className={ styles.moviesListWrapper }>
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
          { !this.props.listLoaded
            ? this.state.loading && <Loading/>
            : <div>movies have loaded!</div> }
          { /* add not found message */ }
          { !this.props.listLoaded && <Waypoint
            onEnter={ this.enterEndOfList }
            onLeave={ this.leaveEndOfList }
          /> }
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
  setMovieDetails: (movie, defaultValue) => {
    dispatch(actionsMovieDetails.setMovie(movie, defaultValue));
  },
});

const mapStateToProps = state => ({
  movies: state.movies.list,
  listLoaded: state.movies.loaded,
  movie: state.movieDetails,
  genres: state.genres,
  store: state,
});

export default withDialogContext(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MoviesList),
);
