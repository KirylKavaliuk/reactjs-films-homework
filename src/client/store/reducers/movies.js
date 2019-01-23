const defaultValue = { list: [], loaded: false };

export default (state = defaultValue, action) => {
  switch (action.type) {
    case 'ADD_MOVIES': return {
      list: [...state.list, ...action.payload],
      loaded: state.loaded,
    };
    case 'SET_LOADED': return {
      list: state.list.slice(),
      loaded: true,
    };
    case 'REMOVE_MOVIES': return defaultValue;
    default: return state;
  }
};
