import React from 'react';
import renderer from 'react-test-renderer';
import Description from '../Description';

it('<Description/>', () => {
  const tree = renderer
    .create(<Description open text='text'/>)
    .toJSON();

  expect(tree).not.toBeNull();
  expect(tree).toMatchSnapshot();
});

it('<Description/>', () => {
  const tree = renderer
    .create(<Description/>)
    .toJSON();

  expect(tree).toBeNull();
  expect(tree).toMatchSnapshot();
});
