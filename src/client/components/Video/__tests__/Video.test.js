import React from 'react';
import renderer from 'react-test-renderer';
import Video from '../Video';

jest.useFakeTimers();

it('<Video/>', () => {
  const tree = renderer.create(<Video id={ 297802 }/>);

  jest.advanceTimersByTime(2000);

  const video = tree.toJSON();

  video.children[0].props.onLoad();

  expect(video).toMatchSnapshot();
  tree.unmount();
});

it('<Video/>', () => {
  const tree = renderer.create(<Video id={ 66666666666 }/>);

  jest.advanceTimersByTime(7777);

  const video = tree.toJSON();

  expect(video).toMatchSnapshot();
});
