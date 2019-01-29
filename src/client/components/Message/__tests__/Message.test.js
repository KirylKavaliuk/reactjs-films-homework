import React from 'react';
import renderer from 'react-test-renderer';
import Message from '../Message';

jest.useFakeTimers();

it('<Message/>', () => {
  const tree = renderer.create(<Message/>).toJSON();

  expect(tree).toBeNull();
  expect(tree).toMatchSnapshot();
});

it('<Message/>', () => {
  let open = true;

  const closeMessage = () => {
    open = false;
  };

  const tree = renderer.create(
    <Message
      open={ open }
      text='message'
      closeMessage={ closeMessage }
    />,
  );

  const message = tree.toJSON();

  jest.runAllTimers();

  expect(message).not.toBeNull();
  expect(message).toMatchSnapshot();

  tree.unmount();
});
