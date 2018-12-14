import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Rating from '../Rating';

it('renders rating shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Rating value={ 3.3 }/>);

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it('renders rating with value bigger than 5 shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Rating value={ 1356.36 }/>);

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
