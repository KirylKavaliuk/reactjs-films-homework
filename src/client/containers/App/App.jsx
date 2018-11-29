import React, { Component } from 'react';

import MovieDetails from 'Containers/MovieDetails/MovieDetails';

import 'Styles/index.scss';

const movie = {
  name: 'The jungle book',
  genres: ['Adventure', 'Drama', 'Family', 'Fantasy'],
  duration: 0,
  rating: 4.8,
  description: 'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found.',
};

export default () => (
  <MovieDetails movie={ movie }/>
);
