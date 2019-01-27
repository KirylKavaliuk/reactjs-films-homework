import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import MovieListItem from '../MovieListItem';

it('renders movie list item correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <MovieListItem
        movie={{
          id: '1',
          poster_path: '/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg',
          title: 'title',
          genres: [
            {id: 1, name: 'genre1'},
            {id: 2, name: 'genre2'},
            {id: 3, name: 'genre3'},
          ],
          vote_average: 3.5,
          overview: 'overview',
        }}
      />
    </MemoryRouter>,
  );

  const movieGridItem = tree.toJSON();
  expect(tree).not.toBeNull();
  expect(movieGridItem).toMatchSnapshot();

});

it('renders movie list item uncorrectly', () => {
  const tree = renderer.create(
    <MovieListItem/>,
  ).toJSON();

  expect(tree).toBeNull();
  expect(tree).toMatchSnapshot();
});