import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import MoviesList from 'containers/MoviesList/MoviesList';

import MovieDetails from 'components/MovieDetails/MovieDetails';
import MovieItem from 'components/MovieItem/MovieItem';
import Select from 'components/Select/Select';

import request from 'utils/request';

import actionsMovies from 'actions/movies';
import actionsGenres from 'actions/genres';

import styles from './App.scss';
import 'styles/index.scss';

const movie = {
  name: 'The jungle book',
  genres: ['Adventure', 'Drama', 'Family', 'Fantasy'],
  duration: 126,
  rating: 3.4,
  description: 'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found.',
};

class App extends Component {
  state = {
    search: '',
  };

  componentDidMount() {
    this.props.addMovies();
    this.props.addGenres();
  }

  changeSearchHandler = (event) => {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div className={ styles.app }>
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

        <MovieDetails
          movie={ movie }
          changeSearch={ this.changeSearchHandler }
          searchValue={ this.state.search }
        />

        <div className={ styles.list }>
          { this.props.movies.map((_movie, index) => (
          <MovieItem
            key={ _movie.id }
            movie={ _movie }
            genres={ this.props.genres }
          />
          )) }
        </div>

        <MoviesList
          movies={ this.props.movies }
          genres={ this.props.genres }
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovies: () => dispatch(actionsMovies.addMovies()),
  addGenres: () => dispatch(actionsGenres.addGenres()),
});

const mapStateToProps = state => ({
  movies: state.movies,
  genres: state.genres,
});

export default hot(module)(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
