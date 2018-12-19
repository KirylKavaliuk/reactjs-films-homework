import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'containers/App/App';

import configureStore from './store/configureStore';

const root = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={ configureStore() }>
      <App/>
    </Provider>,
    root,
  );
};

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept(() => {
    render();
  });
}

render();
