import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withConditionalRendering from 'utils/withConditionalRendering';

import classNames from 'classnames';

import Image from 'components/Image/Image';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';

import styles from './MovieItem.scss';

class MovieItem extends Component {
  state = {
    descriptionOpen: false,
  };

  toggleDescriptionHandler = () => {
    const { descriptionOpen } = this.state;
    this.setState({ descriptionOpen: !descriptionOpen });
  }

  render() {
    const genres = this.props.movie.genre_ids
      .map(genreId => this.props.genres.find(genre => genre.id === genreId))
      .filter(genre => genre)
      .map(genre => genre.name)
      .slice(0, 3);

    return (
      <div className={ styles.movieItem }>
        <Image
          className={ styles.poster }
          src={ `db/${this.props.movie.poster_path}` }
        />

        { !this.state.descriptionOpen && <div className={ styles.more }>
          <div className={ styles.playButton }>
            <Icon
              className={ styles.playButtonIcon }
              name='play'
            />
            <h3 className={ styles.playButtonHeader }>Play Now</h3>
          </div>

          <Button
            label='View Info'
            transparent
            onClick={ this.toggleDescriptionHandler }
          />
        </div>
        }

        <div className={
          classNames(
            styles.info,
            { [styles.infoVisible]: this.state.descriptionOpen },
          )}
        >
          <div className={
              classNames(
                styles.cancelIcon,
                { [styles.cancelIconVisible]: this.state.descriptionOpen },
              )
            }
            onClick={ this.toggleDescriptionHandler }
          >
            <Icon name='cancel' />
          </div>

          <header className={
            classNames(
              styles.header,
              { [styles.headerOffset]: this.state.descriptionOpen },
            )
          }>
            <h1 className={ styles.title }>{ this.props.movie.title }</h1>
            <p className={ styles.genres }>{
              genres.map(genre => (
                <span className={ styles.genre }>
                  { genre }
                </span>
              ))
            }</p>
            <div className={ styles.rating }>
              { (this.props.movie.vote_average / 2).toPrecision(2) }
            </div>
          </header>

          <p className={
            classNames(
              styles.descriptionText,
              { [styles.descriptionTextVisible]: !this.state.descriptionOpen },
            )
          }>
            { this.props.movie.overview }
          </p>

          <Button
            label='Watch Now'
            className={ styles.watchButton }
          />
        </div>
      </div>
    );
  }
}

MovieItem.defaultProps = {
  movie: null,
  genres: [],
};

MovieItem.propTypes = {
  movie: PropTypes.object,
  genres: PropTypes.array,
};


/*
const MovieItem = ({ movie, genres }) => {
  const genres1 =
  // const _genres = genres.find(genre => genre.id === genre_id);

  ////*
    { movie.genre_ids.map((genre_id, index) => (
      <span
        key={ index }
        className={ styles.genre }
      >
      </span>
    )) }

  return (<div className={ styles.movieItem }>
    <div className={ styles.image }>
      <Image
        src={ `db/${movie.poster_path}` }
        className={ styles.poster }
      />
      <div className={ styles.onHover }>
        <Icon name='star'/>
        <Button label='View Now' />
      </div>
    </div>
    <div className={ styles.info }>
      <header className={ styles.title }>{movie.title}</header>
      <p className={ styles.genres }>
      { genres1.map((genre, index) => (
        <span
          key={ index }
          className={ styles.genre }
        >{ genre }</span>
      ))}
      </p>
      <div className={ styles.rating }>{ (movie.vote_average / 2).toPrecision(2) }</div>
    </div>
  </div>);
};

*/
export default withConditionalRendering(MovieItem, ['movie']);
