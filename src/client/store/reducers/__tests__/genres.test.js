import genres from 'reducers/genres';

const ititialState = [];
const testPayload = [
  { id: 1, name: 'genre1' },
  { id: 2, name: 'genre1' },
  { id: 3, name: 'genre1' },
];

test('test genres reducer', () => {
  let state;

  state = genres(ititialState, {
    type: 'ADD_GENRES',
    payload: testPayload,
  });

  expect(state).toBe(testPayload);

  state = genres(state, {
    type: 'ADD_GENRES',
    payload: testPayload,
  });

  expect(state).toBe(testPayload);

  state = genres(ititialState, {
    type: 'ADD_GENRES_123',
  });

  expect(state.length).toBe(0);
});
