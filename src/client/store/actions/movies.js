import request from 'utils/request';

const getSection = (url) => {
  const sections = ['trading', 'top-rated', 'coming-soon', 'genre', 'search'];

  return sections.findIndex(section => url.includes(section));
};


const getNumberPage = (function () {
  let page = 0;

  return function (number) {
    if (number !== undefined) {
      page = number;
    }

    page += 1;

    return page;
  };
}());

export default {
  add: match => (dispatch) => {
    request.get('db/movie/popular', {
      page: getNumberPage(),
    })
      .then((response) => {
        const requests = response.results.map(movie => request.get(`db/movie/${movie.id}`));

        Promise.all(requests)
          .then((movies) => {
            dispatch({ type: 'ADD_MOVIES', payload: movies });
          });
      });
  },
  remove: () => (dispatch) => {
    getNumberPage(-1);
    dispatch({ type: 'REMOVE_MOVIES' });
  },
};
