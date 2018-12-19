import { combineReducers } from 'redux';
import movies from './movies';
import genres from './genres';

export default combineReducers({
  movies,
  genres,
});
