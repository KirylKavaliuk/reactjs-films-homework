import http from 'utils/http';
import { ADD_MOVIES, SET_LOADED, REMOVE_MOVIES } from 'constants/actionTypes';

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

export const addMoviesForSections = type => async (dispatch) => {
  const { results: movies } = await http.get(`db/movie/${type}`, {
    page: getNumberPage(),
  });

  dispatch({ type: ADD_MOVIES, payload: movies });
};

export const addMoviesForGenre = genreId => async (dispatch) => {
  const { results: movies } = await http.get('db/discover/movie', {
    page: getNumberPage(),
    with_genres: genreId,
  });

  if (!movies.length) {
    dispatch({ type: SET_LOADED });
  }

  dispatch({ type: ADD_MOVIES, payload: movies });
};

export const addMoviesForSearch = query => async (dispatch) => {
  const { results: movies } = await http.get('db/search/movie', {
    page: getNumberPage(),
    query: encodeURI(query),
    include_adult: false,
  });

  if (!movies.length) {
    dispatch({ type: SET_LOADED });
  }

  dispatch({ type: ADD_MOVIES, payload: movies });
};

export const remove = () => (dispatch) => {
  getNumberPage(true);
  dispatch({ type: REMOVE_MOVIES });
};
