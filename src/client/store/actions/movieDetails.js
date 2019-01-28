import http from 'utils/http';

export default {
  setMovie: (movieDetails, defaultValue) => async (dispatch) => {
    if (movieDetails) {
      dispatch({ type: 'SET_MOVIEDETAILS', payload: movieDetails }); // set found movie.
    } else if (defaultValue.id) {
      // if the movie is not found in loaded movies list then make request to db.
      await http.get(`db/movie/${defaultValue.id}`)
        .then((movie) => {
          dispatch({ type: 'SET_MOVIEDETAILS', payload: movie });
        });
    } else {
      dispatch({ type: 'SET_MOVIEDETAILS', payload: defaultValue.movie }); // set first movie in list.
    }
  },
};
