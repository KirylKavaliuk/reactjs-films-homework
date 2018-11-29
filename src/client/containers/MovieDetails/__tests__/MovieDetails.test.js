import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetails from '../MovieDetails';

const movie = {
  name: 'Film',
  genres: ['Adventure', 'Drama', 'Family', 'Fantasy'],
  duration: 237,
  rating: 2.54,
  description: 'Description text description text description text description text description text description text',
};

it('renders movie details component field shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDetails movie={ movie }/>);

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
