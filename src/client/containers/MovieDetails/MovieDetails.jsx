import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withDialogContext } from 'utils/dialog';

import Button from 'components/Button/Button';
import Rating from 'components/Rating/Rating';
import FilmHeader from 'components/FilmHeader/FilmHeader';
import Search from 'components/Search/Search';
import Description from 'components/Description/Description';
import Video from 'components/Video/Video';
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
    return (
      <div
        id='movie-details'
        className={ styles.movieDetails }
        style={{ backgroundImage: this.props.movie.id ? `url(https://image.tmdb.org/t/p/w1280${this.props.movie.backdrop_path})` : '' }}
      >
        <Link to='/' className={ styles.logo }>Films</Link>

        <Search/>

        <FilmHeader
          name={ this.props.movie.title }
          genres={ this.props.movie.genres
            ? this.props.movie.genres.map(genre => genre.name).slice(0, 3)
            : [] }
          duration={ this.props.movie.runtime }
        />

        <Rating value={ this.props.movie.vote_average / 2 }/>

        <div className={ styles.buttonsMore }>
          <Description
            open={ this.state.descriptionOpen }
            text={ this.props.movie.overview }
          />
          <Link params={{ trailer: this.props.movie.id }}>
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

MovieDetails.defaultProps = {

};

MovieDetails.propTypes = {

};

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
