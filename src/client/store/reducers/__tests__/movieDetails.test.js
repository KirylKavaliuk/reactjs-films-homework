import movieDetails from 'reducers/movieDetails';

const ititialState = {};
const testPayload = {
  id: 1,
  title: 'title 1',
  overview: 'sarsar',
};

const testPayload2 = {
  id: 2,
  title: 'title 2',
  overview: 'sarsadtsdstr',
};

test('test movies details reducer', () => {
  let state;

  state = movieDetails(ititialState, {
    type: 'SET_MOVIEDETAILS',
    payload: testPayload,
  });

  expect(state.id).toBe(1);

  state = movieDetails(state, {
    type: 'SET_MOVIEDETAILS',
    payload: testPayload2,
  });

  expect(state.id).toBe(2);

  state = movieDetails(ititialState, {
    type: 'SET_MOVIEDETAILS',
  });

  expect(state.id).toBeUndefined();
});
