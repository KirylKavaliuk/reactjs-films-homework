import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withDialogContext } from 'utils/dialog';

import Button from 'components/Button/Button';
import Rating from 'components/Rating/Rating';
import FilmHeader from 'components/FilmHeader/FilmHeader';
import Search from 'components/Search/Search';
import Description from 'components/Description/Description';
import Link from 'components/Link/Link';

import styles from './MovieDetails.scss';

class MovieDetails extends Component {
  state = {
    descriptionOpen: false,
  };

  toggleDescriptionHandler = () => {
    this.setState({ descriptionOpen: !this.state.descriptionOpen });
  }

  shouldComponentUpdate = (props, state) => (
    this.props.movie.id !== props.movie.id
    || this.state.descriptionOpen !== state.descriptionOpen
  )

  render() {
    const { movie } = this.props;

    return (
      <div
        id='movie-details'
        className={ styles.movieDetails }
        style={{
          backgroundImage: movie.id
            ? `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
            : '',
        }}
      >
        <Link to='/' className={ styles.logo }>Films</Link>

        <Search/>

        <FilmHeader
          name={ movie.title }
          genres={
            movie.genres
              ? movie.genres.map(genre => genre.name).slice(0, 3)
              : []
          }
          duration={ movie.runtime }
        />

        <Rating value={ movie.vote_average / 2 }/>

        <div className={ styles.buttonsMore }>
          <Description
            open={ this.state.descriptionOpen }
            text={ movie.overview }
          />
          <Link params={{ trailer: movie.id }}>
            <Button label='Watch Now'/>
          </Link>
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

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  movie: state.movieDetails,
});

export default withDialogContext(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MovieDetails),
);
