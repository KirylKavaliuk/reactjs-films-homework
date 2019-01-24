import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../Image';

it('renders image uncorrectly', () => {
  const tree = renderer.create(<Image/>).toJSON();

  expect(tree).toBeNull();
  expect(tree).toMatchSnapshot();
});

it('renders image correctly', () => {
  const tree = renderer.create(<Image db src='/image-ib.jpg'/>).toJSON();

  expect(tree).not.toBeNull();
  expect(tree).toMatchSnapshot();
});

it('renders image correctly', () => {
  const tree = renderer.create(
    <Image
      src='images/image-ib.jpg'
      className='Component__class-name__hash'
    />,
  ).toJSON();

  expect(tree).not.toBeNull();
  expect(tree).toMatchSnapshot();
});
