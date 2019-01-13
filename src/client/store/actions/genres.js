import request from 'utils/request';

export default {
  addGenres: () => (dispatch) => {
    request.get('db/genre/movie/list')
      .then((response) => {
        dispatch({ type: 'ADD_GENRES', payload: response.genres });
      });
  },
};
