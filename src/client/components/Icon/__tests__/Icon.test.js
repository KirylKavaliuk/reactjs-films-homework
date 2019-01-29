import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../Icon';

it('<Icon/>', () => {
  const tree = renderer.create(<Icon name='play'/>).toJSON();

  expect(tree).not.toBeNull();
  expect(tree).toMatchSnapshot();
});

it('<Icon/>', () => {
  const tree = renderer.create(
    <Icon name='gun' className='Component__class-name__hash'/>,
  ).toJSON();

  expect(tree).not.toBeNull();
  expect(tree).toMatchSnapshot();
});

it('<Icon/>', () => {
  const tree = renderer.create(<Icon/>).toJSON();

  expect(tree).toBeNull();
  expect(tree).toMatchSnapshot();
});
