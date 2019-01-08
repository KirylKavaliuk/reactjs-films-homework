import request from 'utils/request';

const getNumberPage = (function () {
  let page = 0;

  return function () {
    page += 1;

    return page;
  };
}());

export default {
  addMovies: () => (dispatch) => {
    request.get('db/movie/popular', {
      page: getNumberPage(),
    })
      .then((response) => {
        dispatch({ type: 'ADD_MOVIES', payload: response.results });
      });
  },
};
