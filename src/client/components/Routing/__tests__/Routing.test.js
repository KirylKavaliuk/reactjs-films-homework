import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Routing from '../Routing';

it('<Routing/>', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Routing/>);

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});
