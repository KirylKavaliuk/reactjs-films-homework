import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Link from '../Link';

it('<Link/>', () => {
  const treeWithPath = renderer
    .create(
      <MemoryRouter>
        <Link to='/section'/>
      </MemoryRouter>,
    ).toJSON();

  treeWithPath.props.onMouseEnter();
  expect(treeWithPath).not.toBeNull();
  expect(treeWithPath).toMatchSnapshot();

  const treeWithoutPath = renderer
    .create(
      <MemoryRouter>
        <Link/>
      </MemoryRouter>,
    ).toJSON();

  treeWithoutPath.props.onMouseEnter();
  expect(treeWithoutPath).not.toBeNull();
  expect(treeWithoutPath).toMatchSnapshot();
});
