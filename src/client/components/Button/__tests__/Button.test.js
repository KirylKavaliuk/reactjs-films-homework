import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../Button';

it('<Button/>', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Button label='button'/>);

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});
