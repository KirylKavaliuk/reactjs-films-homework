import request from 'utils/request';
import Query from 'utils/url';

const getNumberPage = (function () {
  let page = 0;

  return function (number) {
    if (number !== undefined) {
      page = number;
    }

    page += 1;

    return page;
  };
}());

const getItemsForGenre = (dispatch, match) => {
  const { genreId } = match.params;

  request.get('db/discover/movie', {
    page: getNumberPage(),
    with_genres: genreId,
  })
    .then((response) => {
      const requests = response.results.map(movie => request.get(`db/movie/${movie.id}`));

      Promise.all(requests)
        .then((movies) => {
          dispatch({ type: 'ADD_MOVIES', payload: movies });
        });
    });
};

const getItemsForSearch = (dispatch) => {
  const query = new Query();

  const q = query.getParam('query');

  request.get('db/search/movie', {
    page: getNumberPage(),
    query: q,
    include_adult: false,
  })
    .then((response) => {
      const requests = response.results.map(movie => request.get(`db/movie/${movie.id}`));

      Promise.all(requests)
        .then((movies) => {
          dispatch({ type: 'ADD_MOVIES', payload: movies });
        });
    });
};

const getItemsForSection = (dispatch, match) => {
  const { url } = match;
  const found = url.match('[0-9a-zA-Z-]+');
  let section = 'popular';

  const map = {
    trading: 'popular',
    'top-rated': 'top_rated',
    'coming-soon': 'upcoming',
  };

  if (found) {
    section = map[found[0]];
  }

  request.get(`db/movie/${section}`, {
    page: getNumberPage(),
  })
    .then((response) => {
      const requests = response.results.map(movie => request.get(`db/movie/${movie.id}`));

      Promise.all(requests)
        .then((movies) => {
          dispatch({ type: 'ADD_MOVIES', payload: movies });
        });
    });
};

export default {
  add: match => (dispatch) => {
    const { url } = match;

    if (url.includes('/genre')) {
      getItemsForGenre(dispatch, match);
    } else if (url.includes('/search')) {
      getItemsForSearch(dispatch);
    } else {
      getItemsForSection(dispatch, match);
    }
  },
  remove: () => (dispatch) => {
    getNumberPage(-1);
    dispatch({ type: 'REMOVE_MOVIES' });
  },
};
