import React from 'react';
import renderer from 'react-test-renderer';
import Message from '../Message';

jest.useFakeTimers();

it('renders message correctly', () => {
  const tree = renderer.create(<Message/>).toJSON();

  expect(tree).toBeNull();
  expect(tree).toMatchSnapshot();
});

it('renders message with timers correctly', () => {
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

  jest.advanceTimersByTime(4000);

  expect(tree.toJSON()).not.toBeNull();
  expect(tree.toJSON()).toMatchSnapshot();
  tree.unmount();
});
