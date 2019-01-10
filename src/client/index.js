import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import App from 'containers/App/App';


import configureStore from './store/configureStore';

const pathes = [
  '/',
  '/trading',
  '/top-rated',
  '/coming-soon',
  '/trading/:id',
  '/top-rated/:id',
  '/coming-soon/:id',
  '/genre/:id',
];

const root = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={ configureStore() }>
      <BrowserRouter>
        <Switch>
          { pathes.map((path, index) => (
            <Route key ={ index } exact path={ path } component={ App }/>
          )) }
          <Route render={ () => <div>not found</div> }/>
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
