import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Description from '../Description';

it('renders description shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Description text='text for description'/>);

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
