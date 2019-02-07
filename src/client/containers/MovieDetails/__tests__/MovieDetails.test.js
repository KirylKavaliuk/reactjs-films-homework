import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import MovieDetails from '../MovieDetails';

const movie = {
  name: 'Film',
  genres: ['Adventure', 'Drama', 'Family', 'Fantasy'],
  duration: 237,
  rating: 2.54,
  description: 'Description text description text description text description text description text description text',
};

it('test onChange search handler', () => {
  const component = TestRenderer.create(<MovieDetails movie={ movie }/>).root;
  const search = component.findByType('input').props;

  search.onChange({ target: { value: 'test search value' } });

  expect(component.instance.state.search).toBe('test search value');
});


it('renders movie details component correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDetails movie={ movie }/>);

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});

it('renders movie details component shallow correctly with null movie', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDetails/>);

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});
