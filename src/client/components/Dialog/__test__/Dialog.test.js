import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Dialog from '../Dialog';


const Component = () => (<div>component for dialog</div>);

it('renders dialog open correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Dialog open>
          <Component/>
        </Dialog>
      </MemoryRouter>,
    ).toJSON();

  expect(tree).not.toBeNull();
  expect(tree).toMatchSnapshot();
});

it('renders dialog close correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Dialog/>
      </MemoryRouter>,
    ).toJSON();

  expect(tree).toBeNull();
  expect(tree).toMatchSnapshot();
});
