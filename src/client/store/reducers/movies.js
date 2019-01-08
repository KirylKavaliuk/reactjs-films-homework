export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES': return [...state, ...action.payload];
    default: return state;
  }
};
