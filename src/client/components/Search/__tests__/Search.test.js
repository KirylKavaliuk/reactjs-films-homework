import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Search from '../Search';

it('<Search/>', () => {
  window.history.pushState({}, 'test', '/genre/43?query=123123&view=list&param=&param2');
  const tree = renderer.create(
    <MemoryRouter>
      <Search/>
    </MemoryRouter>,
  ).toJSON();

  const searchField = tree.children[0];
  const searchButton = tree.children[1];

  searchButton.props.onClick({ preventDefault: () => {} });

  searchField.props.onChange({ target: { value: 'war' } });
  searchButton.props.onClick({ preventDefault: () => {} });

  searchField.props.onChange({ target: { value: '' } });
  searchButton.props.onClick({ preventDefault: () => {} });

  expect(tree).toMatchSnapshot();
});


it('<Search/>', () => {
  window.history.pushState({}, 'test', '/');

  const tree = renderer.create(
    <MemoryRouter>
      <Search/>
    </MemoryRouter>,
  ).toJSON();

  const searchButton = tree.children[1];

  searchButton.props.onClick({ preventDefault: () => {} });

  expect(tree).toMatchSnapshot();
});
