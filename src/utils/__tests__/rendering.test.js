import React from 'react';
import renderer from 'react-test-renderer';

import withConditionalRendering from 'utils/rendering';

const Test = ({ array, string }) => (
  <div>
    { array }
    { string }
  </div>
);

it('renders description close shallow correctly', () => {
  const TestComponentArray = withConditionalRendering(Test, 'array');
  const TestComponentString = withConditionalRendering(Test, 'string');

  const arrayTree = renderer
    .create(<TestComponentArray array={[1, 2, 3]}/>)
    .toJSON();

  const stringTree = renderer
    .create(<TestComponentString string='str'/>)
    .toJSON();

  const nullTree = renderer
    .create(<TestComponentArray/>)
    .toJSON();

  expect(arrayTree).toMatchSnapshot();
  expect(stringTree).toMatchSnapshot();
  expect(nullTree).toMatchSnapshot();
});
