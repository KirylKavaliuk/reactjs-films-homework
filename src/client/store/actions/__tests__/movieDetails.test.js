import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import movieDetails from '../movieDetails';

const mockStore = configureMockStore([thunk]);

const movie = {
  id: 1,
  title: 'title',
  desc: 'desc',
};

test('test movie details actions', async () => {
  const store = mockStore();

  await store.dispatch(movieDetails.setMovie(movie));

  const actions = store.getActions();

  expect(actions[0].type).toBe('SET_MOVIEDETAILS');
});

export default mockStore;
