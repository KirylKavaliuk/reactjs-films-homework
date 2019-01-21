import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import MoviesList from 'containers/MoviesList/MoviesList';

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
  value: '/genre/:genreId',
}];

const Routing = () => (
  <Switch>
    { pathes.map((path, index) => (
      <Route
        key ={ index }
        exact={ path.exact }
        path={ path.value }
        component={ MoviesList }
      />
    )) }
    <Route component={ NotFound }/>
  </Switch>
);

export default Routing;
