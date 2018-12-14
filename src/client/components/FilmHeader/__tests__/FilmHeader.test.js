import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FilmHeader from '../FilmHeader';

it('renders film header with 0m duration shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<FilmHeader
    name='film name 1'
    genres={ ['genre1', 'genre2', 'genre3'] }
    duration={ 0 }
  />);

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

it('renders film header with 120m(2h 0m) duration shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<FilmHeader
    name='film name 2'
    genres={ ['genre1', 'genre2', 'genre3'] }
    duration={ 120 }
  />);

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});


it('renders film header with 15m(0h 15m) duration shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<FilmHeader
    name='film name 3'
    genres={ ['genre1', 'genre2', 'genre3'] }
    duration={ 15 }
  />);

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
