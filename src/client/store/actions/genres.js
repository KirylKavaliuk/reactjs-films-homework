import request from 'utils/request';

export default {
  addGenres: () => (dispatch) => {
    request.get('db/genre/movie/list', {
      page: 1,
    })
      .then((response) => {
        dispatch({ type: 'ADD_GENRES', payload: [...response.genres, { id: 999, name: 'Very very long name with abs tspt twp trsten trstre' }] });
      });
  },
};
