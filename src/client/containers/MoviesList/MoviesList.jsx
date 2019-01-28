import React, { Component } from 'react';
import { connect } from 'react-redux';

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

import { getParam, getSection } from 'utils/url';

import styles from './MoviesList.scss';

class MoviesList extends Component {
  state = {
    gridView: true,
    loading: false,
    trailer: null,
    query: null,
    movie: null,
  };

  componentDidMount = () => {
    this.props.removeMovies();
  }

  componentWillReceiveProps(props) {
    const trailer = getParam('trailer');
    const movie = getParam('movie');
    const gridView = getParam('view') !== 'list';
    const query = getParam('query');

    if (this.props.movie.id !== +movie) {
      this.setDetailsMovie(props, +movie);
    }

    if (this.state.gridView !== gridView) {
      this.setState({ gridView });
    }

    if (this.props.match.params.genreId !== props.match.params.genreId) {
      this.props.removeMovies();
    }

    if (this.state.trailer !== trailer) {
      this.setState({ trailer }, () => {
        if (this.state.trailer) {
          this.props.openDialog(<Video id={ +trailer }/>);
        } else {
          this.props.closeDialog();
        }
      });
    }

    if (this.state.query !== query) {
      this.setState({ query }, () => {
        this.props.removeMovies();
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
    if (!this.props.listLoaded) {
      this.setState({ loading: true });

      const section = getSection(true);

      switch (section) {
        case '/search': {
          const query = getParam('query');
          this.props.loadMoviesForSearch(query);
        }
          break;
        case '/genre': {
          const { genreId } = this.props.match.params;

          this.props.loadMoviesForGenre(+genreId);
        }
          break;
        default: {
          const map = {
            '/': 'popular',
            '/trading': 'popular',
            '/top-rated': 'top_rated',
            '/coming-soon': 'upcoming',
          };

          const type = map[section];

          this.props.loadMoviesForSections(type);
        }
      }
    }
  }

  leaveEndOfList = () => {
    this.setState({ loading: false });
  }

  loadingRender = () => {
    if (this.props.listLoaded) {
      if (this.props.movies.length) {
        return <div className={ styles.loaded }>Movies are loaded</div>;
      }

      return <div className={ styles.notFound }>Movies are not found</div>;
    }

    return <Loading/>;
  }

  render() {
    const ListItem = this.state.gridView ? MovieGridItem : MovieListItem;
    const viewClasses = classNames(
      { [styles.grid]: this.state.gridView },
      { [styles.list]: !this.state.gridView },
    );

    return (
      <div className={ styles.moviesListWrapper }>
        <div className={ styles.moviesList } onChange={ this.genreChangeHandler }>
          <ListControls
            match={ this.props.match }
            genres={ this.props.genres }
            gridView={ this.state.gridView }
          />
          <div className={ viewClasses }>
            { this.props.movies.map((_movie, index) => (
                <ListItem
                  key={ index }
                  movie={ _movie }
                />
            )) }
          </div>
          { this.loadingRender() }
          { !this.props.listLoaded && <Waypoint
            onEnter={ this.enterEndOfList }
            onLeave={ this.leaveEndOfList }
          /> }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadMoviesForSections: type => dispatch(actionsMovies.addMoviesForSections(type)),
  loadMoviesForGenre: genreId => dispatch(actionsMovies.addMoviesForGenre(genreId)),
  loadMoviesForSearch: query => dispatch(actionsMovies.addMoviesForSearch(query)),
  removeMovies: () => dispatch(actionsMovies.remove()),
  setMovieDetails: (movie, defaultValue) => (
    dispatch(actionsMovieDetails.setMovie(movie, defaultValue))
  ),
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
