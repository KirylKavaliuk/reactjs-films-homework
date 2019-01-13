export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_MOVIEDETAILS': return action.payload;
    default: return state;
  }
};
