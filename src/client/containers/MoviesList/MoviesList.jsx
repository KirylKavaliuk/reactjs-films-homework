import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withDialogContext } from 'utils/dialog';

import Waypoint from 'react-waypoint';
import classNames from 'classnames';

import setMovie from 'actions/movieDetails';

import ListControls from 'components/ListControls/ListControls';
import MovieGridItem from 'components/MovieGridItem/MovieGridItem';
import MovieListItem from 'components/MovieListItem/MovieListItem';
import Loading from 'components/Loading/Loading';
import Video from 'components/Video/Video';

import { getParam, getSection } from 'utils/url';
import {
  addMoviesForSections, addMoviesForGenre, addMoviesForSearch, remove,
} from 'actions/movies';

import styles from './MoviesList.scss';

class MoviesList extends Component {
  state = {
    gridView: true,
    loading: false,
    trailer: null,
    query: null,
    movie: {},
  };

  componentDidMount = () => {
    const { removeMovies } = this.props;

    removeMovies();
  }

  componentWillReceiveProps(props) {
    const {
      gridView, trailer, query, movie,
    } = this.state;
    const {
      movies, match, openDialog, closeDialog, removeMovies, setMovieDetails, movieDetails,
    } = props;
    const trailerParam = getParam('trailer');
    const movieIdParam = getParam('movie');
    const gridViewParam = getParam('view') !== 'list';
    const queryParam = getParam('query');

    if (movieIdParam) {
      if (movie.id !== +movieIdParam) {
        const foundMovie = movies.find(_movie => _movie.id === +movieIdParam);

        if (foundMovie && foundMovie.id !== movie.id) {
          this.setState({ movie: foundMovie }, () => {
            window.scrollTo(0, 0);
            setMovieDetails(foundMovie);
          });
        }
      }
    } else if (!movieDetails.id) {
      const firstMovie = movies[0];

      if (firstMovie) {
        setMovieDetails(firstMovie);
      }
    }

    if (gridView !== gridViewParam) {
      this.setState({ gridView: gridViewParam });
    }

    if (this.props.match.params.genreId !== match.params.genreId) {
      removeMovies();
    }

    if (trailer !== trailerParam) {
      this.setState({ trailer: trailerParam }, () => {
        if (trailerParam) {
          openDialog(<Video id={ +trailerParam }/>);
        } else {
          closeDialog();
        }
      });
    }

    if (query !== queryParam) {
      this.setState({ query: queryParam }, () => { removeMovies(); });
    }
  }

  enterEndOfList = () => {
    const {
      match, listLoaded, loadMoviesForSearch, loadMoviesForGenre, loadMoviesForSections,
    } = this.props;

    if (!listLoaded) {
      const section = getSection(true);
      this.setState({ loading: true });

      switch (section) {
        case '/search': {
          const query = getParam('query');

          loadMoviesForSearch(query);
          break;
        }
        case '/genre': {
          const { genreId } = match.params;

          loadMoviesForGenre(+genreId);
          break;
        }
        default: {
          const map = {
            '/': 'popular',
            '/trading': 'popular',
            '/top-rated': 'top_rated',
            '/coming-soon': 'upcoming',
          };
          const type = map[section];

          loadMoviesForSections(type);
          break;
        }
      }
    }
  }

  leaveEndOfList = () => {
    this.setState({ loading: false });
  }

  loadingRender = () => {
    const { listLoaded, movies } = this.props;

    if (listLoaded) {
      if (movies.length) {
        return <div className={ styles.loaded }>Movies are loaded</div>;
      }

      return <div className={ styles.notFound }>Movies are not found</div>;
    }

    return <Loading/>;
  }

  moviesListRender = () => {
    const { movies, genres } = this.props;
    const { gridView } = this.state;
    const ListItem = gridView ? MovieGridItem : MovieListItem;
    const classes = classNames(
      { [styles.grid]: gridView },
      { [styles.list]: !gridView },
    );

    return (
      <div className={ classes }>
        { movies.map((_movie, index) => (
        <ListItem key={ index } movie={ _movie } genres={ genres }/>
        )) }
      </div>
    );
  }

  render() {
    const {
      match, genres, listLoaded,
    } = this.props;
    const { gridView } = this.state;

    return (
      <div className={ styles.moviesListWrapper }>
        <div className={ styles.moviesList } onChange={ this.genreChangeHandler }>
          <ListControls match={ match } genres={ genres } gridView={ gridView }/>
          { this.moviesListRender() }
          { this.loadingRender() }
          { !listLoaded && <Waypoint
            waypoint
            onEnter={ this.enterEndOfList }
            onLeave={ this.leaveEndOfList }
          /> }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadMoviesForSections: type => dispatch(addMoviesForSections(type)),
  loadMoviesForGenre: genreId => dispatch(addMoviesForGenre(genreId)),
  loadMoviesForSearch: query => dispatch(addMoviesForSearch(query)),
  removeMovies: () => dispatch(remove()),
  setMovieDetails: (movie, defaultValue) => (
    dispatch(setMovie(movie, defaultValue))
  ),
});

const mapStateToProps = state => ({
  movies: state.movies.list,
  listLoaded: state.movies.loaded,
  movie: state.movieDetails,
  genres: state.genres,
  movieDetails: state.movieDetails,
});

export default withDialogContext(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MoviesList),
);
