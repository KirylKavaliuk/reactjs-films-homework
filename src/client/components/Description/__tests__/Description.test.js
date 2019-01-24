import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Description from '../Description';

it('renders description open shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Description open text='text'/>);

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});

it('renders description close shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Description/>);

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});
