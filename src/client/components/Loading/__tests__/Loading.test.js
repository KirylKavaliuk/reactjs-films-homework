import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Loading from '../Loading';

it('<Loading/>', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Loading/>);

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});

it('<Loading/>', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Loading className='Component__class-name__hash'/>);

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});
