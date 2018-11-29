import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FilmHeader from '../FilmHeader';

it('renders film header shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<FilmHeader
    name='film name'
    genres={ ['genre1', 'genre2', 'genre3', 'genre4', 'genre5'] }
    duration={ 126 }
  />);

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
