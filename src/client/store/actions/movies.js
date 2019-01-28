import http from 'utils/http';
import { getParam, getSection } from 'utils/url';

const getNumberPage = (function () {
  let page = 0;

  return function (clear = false) {
    if (clear) {
      page = -1;
    }

    page += 1;

    return page;
  };
}());

const getMoviesDetails = async (movies) => {
  if (movies) {
    return Promise.all(movies.map(movie => http.get(`db/movie/${movie.id}`)));
  }
  return [];
};

export default {
  addMoviesForSections: type => async (dispatch) => {
    const { results: tempMovies } = await http.get(`db/movie/${type}`, {
      page: getNumberPage(),
    });

    const movies = await getMoviesDetails(tempMovies);

    dispatch({ type: 'ADD_MOVIES', payload: movies });
  },
  addMoviesForGenre: genreId => async (dispatch) => {
    const { results: tempMovies } = await http.get('db/discover/movie', {
      page: getNumberPage(),
      with_genres: genreId,
    });

    const movies = await getMoviesDetails(tempMovies);

    if (!movies.length) {
      dispatch({ type: 'SET_LOADED' });
    }

    dispatch({ type: 'ADD_MOVIES', payload: movies });
  },
  addMoviesForSearch: query => async (dispatch) => {
    const { results: tempMovies } = await http.get('db/search/movie', {
      page: getNumberPage(),
      query: encodeURI(query),
      include_adult: false,
    });

    const movies = await getMoviesDetails(tempMovies);

    if (!movies.length) {
      dispatch({ type: 'SET_LOADED' });
    }

    dispatch({ type: 'ADD_MOVIES', payload: movies });
  },
  remove: () => (dispatch) => {
    getNumberPage(true);
    dispatch({ type: 'REMOVE_MOVIES' });
  },
};
