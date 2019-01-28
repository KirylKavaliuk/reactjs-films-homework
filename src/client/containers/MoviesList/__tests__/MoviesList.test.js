import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'store/configureStore';

import MoviesList from '../MoviesList';

it('renders movies list correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Provider store={ configureStore() }>
        <MoviesList
          match={{
            params: { genreId: 2 },
            isExact: true,
            path: '',
            url: '/',
          }}
        />
      </Provider>
    </MemoryRouter>,
  );

  const moviesList = tree.toJSON();

  expect(moviesList).toMatchSnapshot();
});
