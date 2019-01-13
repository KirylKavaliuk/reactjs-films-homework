export default {
  setMovie: movieDetails => (dispatch) => {
    dispatch({ type: 'SET_MOVIEDETAILS', payload: movieDetails });
  },
};
