export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_MOVIEDETAILS':
      if (action.payload) {
        return action.payload;
      }

      return state;
    default: return state;
  }
};
