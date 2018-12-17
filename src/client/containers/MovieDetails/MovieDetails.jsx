import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button/Button';
import Rating from 'Components/Rating/Rating';
import FilmHeader from 'Components/FilmHeader/FilmHeader';
import Search from 'Components/Search/Search';

import styles from './MovieDetails.scss';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.onChangeSearchHandler = this.onChangeSearchHandler.bind(this);
  }

  onChangeSearchHandler(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    if (this.props.movie) {
      return (
        <section className={ styles.movieDetails }>
          <div className={ styles.gradientBottom }></div>
          <div className={ styles.gradientTop }></div>
          <div className={ styles.content}>
            <div className={ styles.top }>
              <div className={ styles.logo }>
                Films
              </div>
              <Search
                value={ this.state.search }
                onChange={ this.onChangeSearchHandler }
              />
            </div>
            <div className={ styles.bottom }>
              <div className={ styles.briefInfo }>
                <FilmHeader
                  name={ this.props.movie && this.props.movie.name }
                  genres={ this.props.movie.genres }
                  duration={ this.props.movie.duration }
                />

                <Rating
                  value={ this.props.movie.rating }
                />
              </div>
              <div className={ styles.moreButtons }>
                <Button
                  label='Watch Now'
                />

                <Button
                  label='View Info'
                  transparent
                />
              </div>
            </div>
          </div>
        </section>
      );
    }
    return null;
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
