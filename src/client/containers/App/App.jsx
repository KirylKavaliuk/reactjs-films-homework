import React, { Component } from 'react';

import MovieDetails from 'Containers/MovieDetails/MovieDetails';

import 'Styles/index.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <section>
      <MovieDetails/>
    </section>
  }
}
