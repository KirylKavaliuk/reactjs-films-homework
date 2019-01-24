import React from 'react';
import renderer from 'react-test-renderer';
import Description from '../Description';

it('renders description open correctly', () => {
  const tree = renderer
    .create(<Description open text='text'/>)
    .toJSON();

  expect(tree).not.toBeNull();
  expect(tree).toMatchSnapshot();
});

it('renders description close correctly', () => {
  const tree = renderer
    .create(<Description/>)
    .toJSON();

  expect(tree).toBeNull();
  expect(tree).toMatchSnapshot();
});
