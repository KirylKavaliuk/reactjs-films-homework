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
  value: '/popular',
}, {
  exact: true,
  value: '/top_rated',
}, {
  exact: true,
  value: '/upcoming',
}, {
  exact: true,
  value: '/popular/movie/:movieId',
}, {
  exact: true,
  value: '/top_rated/movie/:movieId',
}, {
  exact: true,
  value: '/upcoming/movie/:movieId',
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
