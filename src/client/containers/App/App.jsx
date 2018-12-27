import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import { Provider as DialogProvider } from 'utils/dialog';

import MoviesList from 'containers/MoviesList/MoviesList';

import MovieDetails from 'components/MovieDetails/MovieDetails';
import MovieItem from 'components/MovieItem/MovieItem';
import Select from 'components/Select/Select';
import Loading from 'components/Loading/Loading';
import Footer from 'components/Footer/Footer';
import Dialog from 'components/Dialog/Dialog';
import Rating from 'components/Rating/Rating';

import request from 'utils/request';

import actionsMovies from 'actions/movies';
import actionsGenres from 'actions/genres';

import styles from './App.scss';
import 'styles/index.scss';

const movie = {
  name: 'The jungle book',
  genres: ['Adventure', 'Drama', 'Family', 'Fantasy'],
  duration: 126,
  rating: 2.75,
  description: 'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found.',
};

class App extends Component {
  state = {
    search: '',
    dialog: {
      open: false,
      component: null,
    },
  };

  openDialogHandler = (component) => {
    this.setState({
      dialog: {
        open: true,
        component,
      },
    });
  }

  closeDialogHandler = (event) => {
    this.setState({
      dialog: {
        open: false,
        component: null,
      },
    });
  }

  componentDidMount = () => {
    this.props.addMovies();
    this.props.addGenres();
  }

  changeSearchHandler = (event) => {
    this.setState({ search: event.target.value });
  }

  render() {
    const { search } = this.state;

    return (
      <div className={ styles.app }>
        <DialogProvider value={{
          openDialog: this.openDialogHandler,
        }}>
          <MovieDetails
            movie={ movie }
            changeSearch={ this.changeSearchHandler }
            searchValue={ this.state.search }
          />
          <MoviesList
            movies={ this.props.movies }
            genres={ this.props.genres }
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
        </DialogProvider>

        <Dialog
          open={ this.state.dialog.open }
          component={ this.state.dialog.component }
          closeDialog={ this.closeDialogHandler }
        />

        <Footer/>
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
