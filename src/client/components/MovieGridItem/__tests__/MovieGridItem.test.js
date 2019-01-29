import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import MovieGridItem from '../MovieGridItem';

it('<MovieGridItem/>', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <MovieGridItem
        movie={{
          id: '1',
          poster_path: '/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg',
          title: 'title',
          genres: [
            { id: 1, name: 'genre1' },
            { id: 2, name: 'genre2' },
            { id: 3, name: 'genre3' },
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

  const descButton = movieGridItem.children[1].children[1];

  descButton.props.onClick();
  expect(movieGridItem).toMatchSnapshot();
  expect(tree).toMatchSnapshot();
});

it('<MovieGridItem/>', () => {
  const tree = renderer.create(<MovieGridItem/>).toJSON();

  expect(tree).toBeNull();
  expect(tree).toMatchSnapshot();
});
