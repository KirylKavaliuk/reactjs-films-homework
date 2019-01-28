import http from 'utils/http';

export default {
  setMovie: (movieDetails, defaultValue) => (dispatch) => {
    if (movieDetails) {
      dispatch({ type: 'SET_MOVIEDETAILS', payload: movieDetails }); // set found movie.
    } else if (defaultValue.id) {
      // if the movie is not found in loaded movies list then make request to db.
      http.get(`db/movie/${defaultValue.id}`)
        .then((movie) => {
          dispatch({ type: 'SET_MOVIEDETAILS', payload: movie });
        })
        .catch((err) => {
          dispatch({ type: 'SET_MOVIEDETAILS', payload: defaultValue.movie }); // set first movie in list.
        });
    } else {
      dispatch({ type: 'SET_MOVIEDETAILS', payload: defaultValue.movie }); // set first movie in list.
    }
  },
};
