import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'store/configureStore';
import { Provider as DialogProvider } from 'utils/dialog';
import { Provider as MessageProvider } from 'utils/message';

import MoviesList from '../MoviesList';

const movie = {
  name: 'Film',
  genres: [
    { id: 1, name: 'Adventure' },
    { id: 2, name: 'Drama' },
    { id: 3, name: 'Family' },
    { id: 4, name: 'Fantasy' },
  ],
  runtime: 237,
  vote_average: 2.54,
  overview: 'Description text description text description text description text description text description text',
};

const movies = [{ id: 1, ...movie }, { id: 2, ...movie }, { id: 3, ...movie }];

const getComponent = (_movies = [], loaded = false, url = '/', genreId = '2') => (
  <MemoryRouter>
    <DialogProvider value={{
      openDialog: () => {},
      closeDialog: () => {},
    }}>
      <MessageProvider value={{ openMessage: () => {} }}>
        <Provider store={ configureStore({
          movies: {
            list: _movies,
            loaded,
          },
        }) }>
          <MoviesList
            match={{
              params: { genreId },
              isExact: true,
              url,
            }}
          />
        </Provider>
      </MessageProvider>
    </DialogProvider>
  </MemoryRouter>
);

it('<MoviesList/>', () => {
  window.scrollTo = () => { };
  const tree = renderer.create(getComponent(movies));
  const { root } = tree;

  const waypoint = root.findByProps({ waypoint: true }).props;
  window.history.pushState({}, 'test', '/search?query=war');
  waypoint.onEnter();
  window.history.pushState({}, 'test', '/trading');
  waypoint.onEnter();
  window.history.pushState({}, 'test', '/top-rated');
  waypoint.onEnter();
  window.history.pushState({}, 'test', '/genre/23');
  waypoint.onEnter();
  tree.update(getComponent(movies, true));
  expect(tree.toJSON()).toMatchSnapshot();
  waypoint.onEnter();
  waypoint.onLeave();

  tree.update(getComponent(movies, false));
  expect(tree.toJSON()).toMatchSnapshot();

  tree.update(getComponent(movies, true));
  expect(tree.toJSON()).toMatchSnapshot();

  tree.update(getComponent([], true));
  expect(tree.toJSON()).toMatchSnapshot();

  tree.update(getComponent(movies, true, undefined, 5));
  expect(tree.toJSON()).toMatchSnapshot();

  window.history.pushState({}, 'test', '/?trailer=12343');
  tree.update(getComponent([], true));
  expect(tree.toJSON()).toMatchSnapshot();

  window.history.pushState({}, 'test', '/?view=list');
  tree.update(getComponent([], true));
  expect(tree.toJSON()).toMatchSnapshot();

  window.history.pushState({}, 'test', '/?movie=2');
  tree.update(getComponent(movies, true));
  expect(tree.toJSON()).toMatchSnapshot();

  window.history.pushState({}, 'test', '/?movie=2');
  tree.update(getComponent(movies, true));
  expect(tree.toJSON()).toMatchSnapshot();
});
