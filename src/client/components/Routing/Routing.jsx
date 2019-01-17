import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import App from 'containers/App/App';

import NotFound from 'components/NotFound/NotFound';

const pathes = [{
  exact: true,
  value: '/',
}, {
  exact: true,
  value: '/trading',
}, {
  exact: true,
  value: '/top-rated',
}, {
  exact: true,
  value: '/coming-soon',
}, {
  exact: true,
  value: '/search',
}, {
  exact: true,
  value: '/trading/movie/:movieId',
}, {
  exact: true,
  value: '/top-rated/movie/:movieId',
}, {
  exact: true,
  value: '/coming-soon/movie/:movieId',
}, {
  exact: true,
  value: '/genre/:genreId',
}];

const Routing = () => (
  <Switch>
    { pathes.map((path, index) => (
      <Route
        key ={ index }
        exact={ path.exact }
        path={ path.value }
        component={ App }
      />
    )) }
    <Route component={ NotFound }/>
  </Switch>
);

export default Routing;
