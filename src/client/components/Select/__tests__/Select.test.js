import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Select from '../Select';


it('renders select correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Select
        match={{
          params: { genreId: 2 },
          isExact: true,
          path: '',
          url: '',
        }}
        genres={ [
          { id: 1, name: 'genre1' },
          { id: 2, name: 'genre2' },
          { id: 3, name: 'genre3' },
        ] }
      />
    </MemoryRouter>,
  );

  const select = tree.toJSON();
  const activeValueField = select.children[0];
  expect(select).toMatchSnapshot();

  select.props.onMouseLeave();
  expect(select).toMatchSnapshot();

  activeValueField.props.onClick();
  expect(select).toMatchSnapshot();
});
