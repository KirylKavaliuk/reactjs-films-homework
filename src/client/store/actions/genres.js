import http from 'utils/http';
import { ADD_GENRES } from 'constants/actionTypes';

export default {
  addGenres: () => (dispatch) => {
    http.get('db/genre/movie/list')
      .then(({ genres }) => dispatch({ type: ADD_GENRES, payload: genres }));
  },
};
