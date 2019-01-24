import request from 'utils/request';

export default {
  addGenres: () => (dispatch) => {
    request.get('db/genre/movie/list')
      .then(({ genres }) => {
        dispatch({ type: 'ADD_GENRES', payload: genres });
      });
  },
};
