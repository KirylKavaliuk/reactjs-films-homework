import request from 'utils/request';
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

const getMoviesDetails = (dispatch, movies) => {
  const requests = movies.results.map(movie => request.get(`db/movie/${movie.id}`));

  Promise.all(requests)
    .then((_movies) => {
      if (!_movies.length) {
        dispatch({ type: 'SET_LOADED' });
      }

      dispatch({ type: 'ADD_MOVIES', payload: _movies });
    });
};

const getItemsForGenre = (dispatch, genreId) => {
  request.get('db/discover/movie', {
    page: getNumberPage(),
    with_genres: genreId,
  })
    .then(async (response) => {
      getMoviesDetails(dispatch, response);
    });
};

const getItemsForSearch = (dispatch) => {
  const query = getParam('query');

  request.get('db/search/movie', {
    page: getNumberPage(),
    query: decodeURI(query),
    include_adult: false,
  })
    .then((response) => {
      getMoviesDetails(dispatch, response);
    });
};

const getItemsForSections = (dispatch, match) => {
  const map = {
    '/': 'popular',
    '/trading': 'popular',
    '/top-rated': 'top_rated',
    '/coming-soon': 'upcoming',
  };

  request.get(`db/movie/${map[getSection(true)]}`, {
    page: getNumberPage(),
  })
    .then((response) => {
      getMoviesDetails(dispatch, response);
    });
};

export default {
  add: match => (dispatch) => {
    const section = getSection(true);

    switch (section) {
      case '/genre':
        getItemsForGenre(dispatch, match.params.genreId);
        break;
      case '/search':
        getItemsForSearch(dispatch);
        break;
      default: getItemsForSections(dispatch, match);
    }
  },
  remove: () => (dispatch) => {
    getNumberPage(true);
    dispatch({ type: 'REMOVE_MOVIES' });
  },
};
