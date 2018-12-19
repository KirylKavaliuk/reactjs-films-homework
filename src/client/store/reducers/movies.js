export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES': if (state.length) {
      return state;
    }
      return action.payload;

    default: return state;
  }
};
