import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import movies from '../movies';

const mockStore = configureMockStore([thunk]);

test('addMoviesForSections', async () => {
  const store = mockStore();

  await store.dispatch(movies.addMoviesForSections('/popular'));
  const actions = store.getActions();
  expect(actions[0].type).toBe('ADD_MOVIES');
  expect(actions[0].payload.length).toBe(0);
}, 1500);

test('addMoviesForGenre', async () => {
  const store = mockStore();

  await store.dispatch(movies.addMoviesForGenre(28));
  await store.dispatch(movies.addMoviesForGenre());

  const actions = store.getActions();

  expect(actions[0].type).toBe('ADD_MOVIES');
  expect(actions[0].payload.length).toBe(20);

  expect(actions[1].type).toBe('SET_LOADED');

  expect(actions[2].type).toBe('ADD_MOVIES');
  expect(actions[2].payload.length).toBe(0);
}, 3000);

test('addMoviesForSearch', async () => {
  const store = mockStore();

  await store.dispatch(movies.addMoviesForSearch('war'));
  await store.dispatch(movies.addMoviesForSearch());
  const actions = store.getActions();

  expect(actions[0].type).toBe('ADD_MOVIES');
  expect(actions[0].payload.length).toBe(20);

  expect(actions[1].type).toBe('SET_LOADED');

  expect(actions[2].type).toBe('ADD_MOVIES');
  expect(actions[2].payload.length).toBe(0);
}, 4500);

export default mockStore;
