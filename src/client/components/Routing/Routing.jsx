import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import App from 'containers/App/App';

const pathes = [{
  exact: true,
  value: '/',
}, {
  exact: true,
  value: '/popular',
}, {
  exact: true,
  value: '/top-rated',
}, {
  exact: true,
  value: '/upcoming',
}, {
  exact: true,
  value: '/popular/movie/:movieId',
}, {
  exact: true,
  value: '/top-rated/movie/:movieId',
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
        component={ App }/>
    )) }
    <Route render={ () => <div>not found</div> }/>
  </Switch>
);

export default Routing;
