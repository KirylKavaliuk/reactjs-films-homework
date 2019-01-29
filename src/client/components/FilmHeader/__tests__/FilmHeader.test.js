import React from 'react';
import renderer from 'react-test-renderer';
import FilmHeader from '../FilmHeader';

it('<FilmHeader/>', () => {
  const tree = renderer.create(
    <FilmHeader genres={ ['genre1', 'genre2', 'genre3'] }/>,
  ).toJSON();

  expect(tree).not.toBeNull();
  expect(tree).toMatchSnapshot();
});

it('<FilmHeader/>', () => {
  const tree = renderer.create(
    <FilmHeader
      genres={ ['genre1', 'genre2', 'genre3'] }
      duration={ 250 }
    />,
  ).toJSON();

  expect(tree).not.toBeNull();
  expect(tree).toMatchSnapshot();
});

it('<FilmHeader/>', () => {
  const tree = renderer.create(
    <FilmHeader
      genres={['genre1', 'genre2', 'genre3']}
      duration={ 60 }
    />,
  ).toJSON();

  expect(tree).not.toBeNull();
  expect(tree).toMatchSnapshot();
});

it('<FilmHeader/>', () => {
  const tree = renderer.create(
    <FilmHeader
      genres={['genre1', 'genre2', 'genre3']}
      duration={ 50 }
    />,
  ).toJSON();

  expect(tree).not.toBeNull();
  expect(tree).toMatchSnapshot();
});

it('<FilmHeader/>', () => {
  const tree = renderer.create(<FilmHeader/>).toJSON();

  expect(tree).toBeNull();
  expect(tree).toMatchSnapshot();
});
