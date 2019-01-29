import http from 'utils/http';
import { SET_MOVIEDETAILS } from 'constants/actionTypes';

export default {
  setMovie: (movieDetails, defaultValue) => async (dispatch) => {
    if (movieDetails) {
      dispatch({ type: SET_MOVIEDETAILS, payload: movieDetails });
    } else if (defaultValue.id) {
      await http.get(`db/movie/${defaultValue.id}`)
        .then(movie => dispatch({ type: SET_MOVIEDETAILS, payload: movie }));
    } else {
      dispatch({ type: SET_MOVIEDETAILS, payload: defaultValue.movie });
    }
  },
};
