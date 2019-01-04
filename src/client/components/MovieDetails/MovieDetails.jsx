import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button/Button';
import Rating from 'components/Rating/Rating';
import FilmHeader from 'components/FilmHeader/FilmHeader';
import Search from 'components/Search/Search';
import Description from 'components/Description/Description';

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
      <div className={ styles.movieDetails }>
        <a
          href="#"
          className={ styles.logo }
        >Films</a>

        <Search
          onChange={ this.props.changeSearch }
          value={ this.props.searchValue }
        />

        <FilmHeader
          name={ this.props.movie.name }
          genres={ this.props.movie.genres }
          duration={ this.props.movie.duration }
        />

        <Rating value={ this.props.movie.rating }/>

        <div className={ styles.buttonsMore }>
          <Description
            open={ this.state.descriptionOpen }
            text={ this.props.movie.description }
          />
          <Button label='Watch Now'/>
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

export default withConditionalRendering(MovieDetails, ['movie']);
