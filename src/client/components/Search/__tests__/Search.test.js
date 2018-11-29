import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Search from '../Search';

it('renders search field shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Search value='value for search' onChange={ () => 'string' }/>);

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
