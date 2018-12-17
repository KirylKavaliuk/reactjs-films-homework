import React, { Component } from 'react';

// import MovieDetails from 'containers/MovieDetails/MovieDetails';

import Button from 'components/Button/Button';
import Rating from 'components/Rating/Rating';
import FilmHeader from 'components/FilmHeader/FilmHeader';
import Search from 'components/Search/Search';

import styles from './App.scss';
import 'styles/index.scss';

const movie = {
  name: 'The jungle book',
  genres: ['Adventure', 'Drama', 'Family', 'Fantasy'],
  duration: 126,
  rating: 4.8,
  description: 'There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding community to the Second Salemers, a fanatical faction of No-Majs (American for Muggles) bent on eradicating them.  And the powerful, dark wizard Gellert Grindelwald, after wreaking havoc in Europe, has slipped away…and is now nowhere to be found.',
};

export default () => (
  <>
    <div className={ styles.element }>
      <Button label='Button button'/>
      <Button
        transparent
        label='Button'
      />
    </div>
    <div className={ styles.element }>
      <Rating value={ 3.5 }/>
      <Rating />
    </div>
    <div className={ styles.element }>
      <Search onChange={ () => '123' }/>
    </div>
    <div className={ styles.element }>
      <FilmHeader
        name={ movie.name }
        genres={ movie.genres }
        duration={ movie.duration }
      />
      <FilmHeader
        name={ 'Film`s name' }
        genres={ ['Documentation', 'Adventure'] }
        duration={ movie.duration + 100 }
      />
    </div>
  </>
);
