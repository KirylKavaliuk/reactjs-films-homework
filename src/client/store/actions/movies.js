import request from 'utils/request';

export default {
  addMovies: () => (dispatch) => {
    request.get('db/movie/popular', {
      page: 1,
    })
      .then((response) => {
        dispatch({ type: 'ADD_MOVIES', payload: response.results.slice(0, 5) });
      });
  },
};
