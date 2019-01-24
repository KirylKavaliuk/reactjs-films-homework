import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../Icon';

it('renders icon correctly', () => {
  const tree = renderer.create(<Icon name='play'/>).toJSON();

  expect(tree).not.toBeNull();
  expect(tree).toMatchSnapshot();
});

it('renders icon correctly', () => {
  const tree = renderer.create(
    <Icon
      name='gun'
      className='Component__class-name__hash'
    />,
  ).toJSON();

  expect(tree).not.toBeNull();
  expect(tree).toMatchSnapshot();
});

it('renders icon uncorrectly', () => {
  const tree = renderer.create(<Icon/>).toJSON();

  expect(tree).toBeNull();
  expect(tree).toMatchSnapshot();
});
