import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  Route,
  Link,
  Switch,
  BrowserRouter,
} from 'react-router-dom';

import App from 'containers/App/App';

import configureStore from './store/configureStore';

const root = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={ configureStore() }>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={ route => <App route={ route } /> } />
          <Route path='/:section' render={ route => <App route={ route } /> } />
          <Route path='/:section1/:id' render={ route => <App route={ route } /> } />
        </Switch>
      </BrowserRouter>
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
