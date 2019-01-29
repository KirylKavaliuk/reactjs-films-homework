import { ADD_GENRES } from 'constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_GENRES:
      if (state.length) {
        return state;
      }

      return action.payload;
    default: return state;
  }
};
