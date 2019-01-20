import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withConditionalRendering from 'utils/rendering';
import { withDialogContext } from 'utils/dialog';

import classNames from 'classnames';

import Image from 'components/Image/Image';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';
import Video from 'components/Video/Video';
import Rating from 'components/Rating/Rating';

import styles from './MovieListItem.scss';

class MovieListItem extends Component {
  render() {
    return (
      <div className={ styles.movieItem }>
        <Image
          className={ styles.poster }
          width={ 1280 }
          src={ `db/${this.props.movie.backdrop_path}` }
        />

        <div className={
          classNames(
            styles.info,
          )}
        >

          <header className={
            classNames(
              styles.header,
            )
          }>
            <h1 className={ styles.title }>{ this.props.movie.title }</h1>
            <p className={ styles.genres }>{
              this.props.movie.genres.slice(0, 3).map((genre, index) => (
                <span key={ index } className={ styles.genre }>
                  { genre.name }
                </span>
              ))
            }</p>
            <div className={ styles.rating }>
              <Rating value={ this.props.movie.vote_average / 2 }/>
            </div>
          </header>

          <p className={
            classNames(
              styles.descriptionText,
            )
          }>
            { this.props.movie.overview }
          </p>

          <Button
            label='Watch Now'
            className={ styles.watchButton }
            onClick={ () => this.props.openDialog(<Video id={ this.props.movie.id }/>) }
          />
        </div>
      </div>
    );
  }
}

MovieListItem.defaultProps = {
  movie: null,
  genres: [],
};

MovieListItem.propTypes = {
  movie: PropTypes.object,
  genres: PropTypes.array,
};

export default withDialogContext(MovieListItem);
