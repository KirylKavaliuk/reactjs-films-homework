import { SET_MOVIEDETAILS } from 'constants/actionTypes';
import http from 'utils/http';

export default movie => async (dispatch) => {
  const movieDetails = await http.get(`db/movie/${movie.id}`);

  dispatch({ type: SET_MOVIEDETAILS, payload: movieDetails });
};
