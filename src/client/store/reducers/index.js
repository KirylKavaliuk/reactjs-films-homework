import { combineReducers } from 'redux';
import movies from './movies';
import genres from './genres';
import movieDetails from './movieDetails';

export default combineReducers({
  movies,
  movieDetails,
  genres,
});
