import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import MovieDetails from '../MovieDetails';

const movie = {
  id: 12344455,
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

const movieWithoutGenres = {
  name: 'Film',
  genres: null,
  runtime: 237,
  vote_average: 2.54,
  overview: 'Description text description text description text description text description text description text',
};

it('MovieDetails.test', () => {
  const tree = TestRenderer.create(
    <MemoryRouter>
    <Provider store={ configureStore({
      movieDetails: movie,
    }) }>
      <MovieDetails movie={ movie }/>
    </Provider>
    </MemoryRouter>,
  );

  const { root } = tree;

  let search = root.findByType('input').props;
  search.onChange({ target: { value: 'test search value' } });
  expect(tree.toJSON()).toMatchSnapshot();
  search = root.findByType('input').props;
  expect(search.value).toBe('test search value');

  const descButton = root.findByProps({ label: 'View Info' }).props;
  descButton.onClick();
  expect(tree.toJSON()).toMatchSnapshot();
  descButton.onClick();
  expect(tree.toJSON()).toMatchSnapshot();

  const tree2 = TestRenderer.create(
    <MemoryRouter>
    <Provider store={ configureStore() }>
      <MovieDetails movie={ movieWithoutGenres }/>
    </Provider>
    </MemoryRouter>,
  );

  expect(tree2.toJSON()).toMatchSnapshot();
});
