import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ListControls from '../ListControls';


it('<ListControls/>', () => {
  const props = {
    genres: [
      { id: 1, name: 'genre1' },
      { id: 2, name: 'genre2' },
      { id: 3, name: 'genre3' },
    ],
    match: {
      params: { genreId: 2 },
      isExact: true,
      path: '',
      url: '',
    },
  };

  const tree = renderer.create(
    <MemoryRouter>
      <ListControls { ...props }/>
    </MemoryRouter>,
  );

  const listControls = tree.toJSON();

  expect(listControls).toMatchSnapshot();
});
