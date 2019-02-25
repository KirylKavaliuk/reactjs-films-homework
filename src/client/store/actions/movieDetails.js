import { SET_MOVIEDETAILS } from 'constants/actionTypes';

export default movie => async (dispatch) => {
  dispatch({ type: SET_MOVIEDETAILS, payload: movie });
};
