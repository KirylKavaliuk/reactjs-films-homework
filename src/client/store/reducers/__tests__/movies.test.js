import movies from 'reducers/movies';

const ititialState = { list: [], loaded: false };
const testPayload = [{
  id: 1,
  title: 'title 1',
  overview: 'sarsar',
}, {
  id: 2,
  title: 'title 1',
  overview: 'sarsar',
}, {
  id: 3,
  title: 'title 1',
  overview: 'sarsar',
}];

test('test movies reducer', () => {
  let state;

  state = movies(ititialState, {
    type: 'ADD_MOVIES',
    payload: testPayload,
  });

  expect(state.list.length).toBe(3);
  expect(state.loaded).toBe(false);

  state = movies(state, {
    type: 'ADD_MOVIES',
    payload: testPayload,
  });

  expect(state.list.length).toBe(6);
  expect(state.loaded).toBe(false);

  testPayload.loaded = true;

  state = movies(ititialState, { type: 'SET_LOADED' });

  expect(state.loaded).toBe(true);

  state = movies(ititialState, { type: 'REMOVE_MOVIES' });

  expect(state.list.length).toBe(0);
  expect(state.loaded).toBe(false);
});
