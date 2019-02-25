import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { MemoryRouter } from 'react-router-dom';

import Select from '../Select';

it('<Select/>', () => {
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

  const sRenderer = new ShallowRenderer();
  sRenderer.render(
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
    />,
  );

  expect(sRenderer.getRenderOutput()).toMatchSnapshot();

  sRenderer.render(
    <Select
      match={{
        params: { genreId: 5 },
        isExact: true,
        path: '',
        url: '',
      }}
      genres={ [
        { id: 1, name: 'genre1' },
        { id: 2, name: 'genre2' },
        { id: 3, name: 'genre3' },
      ] }
    />,
  );

  expect(sRenderer.getRenderOutput()).toMatchSnapshot();

  sRenderer.render(
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
    />,
  );

  expect(sRenderer.getRenderOutput()).toMatchSnapshot();
});
