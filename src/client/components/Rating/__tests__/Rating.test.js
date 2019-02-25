import React from 'react';
import renderer from 'react-test-renderer';
import Rating from '../Rating';

it('<Rating/>', () => {
  const tree = renderer.create(
    <Rating
      value={ 2.5 }
      openMessage={ () => {} }
    />,
  );

  const rating = tree.toJSON();
  const stars = rating.children.filter(child => !child.children);

  stars.forEach((star) => {
    star.props.onMouseOver();
    expect(rating).toMatchSnapshot();

    star.props.onMouseOut();
    expect(rating).toMatchSnapshot();

    star.props.onClick();
    expect(rating).toMatchSnapshot();
  });
});

it('<Rating/>', () => {
  const tree = renderer.create(
    <Rating openMessage={ () => {} }/>,
  );

  const rating = tree.toJSON();
  const stars = rating.children.filter(child => !child.children);

  stars.forEach((star) => {
    star.props.onMouseOver();
    expect(rating).toMatchSnapshot();

    star.props.onMouseOut();
    expect(rating).toMatchSnapshot();

    star.props.onClick();
    expect(rating).toMatchSnapshot();
  });
});
