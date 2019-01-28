import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = typeof window === 'object'
  // eslint-disable-next-line
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && process.env.NODE_ENV !== 'production'
  // eslint-disable-next-line
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

export default (initialState = {}) => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
  /*
    if (module.hot && process.env.NODE_ENV !== 'production') {
      module.hot.accept('./reducers/index', () => {
        store.replaceReducer(reducers);
      });
    }
  */

  return store;
};
