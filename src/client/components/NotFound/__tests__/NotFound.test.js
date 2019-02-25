import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import NotFound from '../NotFound';

it('<NotFound/>', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<NotFound/>);

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});
