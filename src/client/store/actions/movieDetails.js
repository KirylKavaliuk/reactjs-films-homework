import http from 'utils/http';
import { SET_MOVIEDETAILS } from 'constants/actionTypes';

export default {
  setMovie: movie => async (dispatch) => {
    dispatch({ type: SET_MOVIEDETAILS, payload: movie });
  },
};
