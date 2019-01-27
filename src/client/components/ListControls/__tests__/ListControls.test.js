import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ListControls from '../ListControls';


it('renders list controls correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <ListControls
        genres={ [
          { id: 1, name: 'genre1' },
          { id: 2, name: 'genre2' },
          { id: 3, name: 'genre3' },
        ] }
        match={{
          params: { genreId: 2 },
          isExact: true,
          path: '',
          url: '',
        }}
      />
    </MemoryRouter>,
  );

  const listControls = tree.toJSON();

  expect(listControls).toMatchSnapshot();
});
