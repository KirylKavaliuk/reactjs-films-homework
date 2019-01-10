import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withDialogContext } from 'utils/dialog';

import Button from 'components/Button/Button';
import Rating from 'components/Rating/Rating';
import FilmHeader from 'components/FilmHeader/FilmHeader';
import Search from 'components/Search/Search';
import Description from 'components/Description/Description';
import Video from 'components/Video/Video';

import withConditionalRendering from 'utils/withConditionalRendering';

import styles from './MovieDetails.scss';

class MovieDetails extends Component {
  state = {
    descriptionOpen: false,
  };

  toggleDescriptionHandler = () => {
    this.setState({ descriptionOpen: !this.state.descriptionOpen });
  }

  render() {
    return (
      <div
        className={ styles.movieDetails }
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${this.props.movie.backdrop_path})` }}
      >
        <a
          href="#"
          className={ styles.logo }
        >Films</a>

        <Search
          onChange={ this.props.changeSearch }
          value={ this.props.searchValue }
        />

        <FilmHeader
          name={ this.props.movie.title }
          genres={ this.props.movie.genres.map(genre => genre.name).slice(0, 3) }
          duration={ this.props.movie.runtime }
        />

        <Rating value={ this.props.movie.vote_average / 2 }/>

        <div className={ styles.buttonsMore }>
          <Description
            open={ this.state.descriptionOpen }
            text={ this.props.movie.overview }
          />
          <Button label='Watch Now' onClick={ () => this.props.openDialog(<Video id={ this.props.movie.id }/>) }/>
          <Button
            label='View Info'
            transparent={ true }
            active={ this.state.descriptionOpen }
            onClick={ this.toggleDescriptionHandler }
          />
        </div>
      </div>
    );
  }
}

MovieDetails.defaultProps = {
  movie: null,
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    genres: PropTypes.array,
    duration: PropTypes.number,
    rating: PropTypes.number,
    description: PropTypes.string,
  }),
};

export default withConditionalRendering(withDialogContext(MovieDetails), ['movie']);
