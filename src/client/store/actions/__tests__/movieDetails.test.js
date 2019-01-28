import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import movieDetails from '../movieDetails';

const mockStore = configureMockStore([thunk]);

const movie = {
  id: 1,
  title: 'title',
  desc: 'desc',
};

const defauldMovie = {
  id: 297802,
  movie: {
    id: 535345345345345,
    title: 'title',
  },
};

const defauldMovie2 = {
  movie: {
    id: 535345345345345,
    title: 'title',
  },
};

test('test movie details', async () => {
  const store = mockStore();

  await store.dispatch(movieDetails.setMovie(null, defauldMovie));
  await store.dispatch(movieDetails.setMovie(movie, defauldMovie));
  await store.dispatch(movieDetails.setMovie(null, defauldMovie2));

  const actions = store.getActions();

  expect(actions[0].type).toBe('SET_MOVIEDETAILS');
  expect(actions[0].payload.id).toBe(297802);

  expect(actions[1].type).toBe('SET_MOVIEDETAILS');
  expect(actions[1].payload.id).toBe(1);

  expect(actions[2].type).toBe('SET_MOVIEDETAILS');
  expect(actions[2].payload.id).toBe(535345345345345);
});

export default mockStore;
