import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Star from '../Star';

it('renders active star element shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Star active/>);

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it('renders default star element shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Star/>);

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
