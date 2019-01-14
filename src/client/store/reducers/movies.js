export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES': return [...state, ...action.payload];
    case 'REMOVE_MOVIES': return [];
    default: return state;
  }
};
