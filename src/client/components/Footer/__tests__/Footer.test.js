import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Footer from '../Footer';

it('<Footer/>', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Footer/>);

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});
