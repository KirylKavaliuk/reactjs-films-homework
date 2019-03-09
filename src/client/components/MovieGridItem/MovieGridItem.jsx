import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withDialogContext } from 'utils/dialog';
import withConditionalRendering from 'utils/rendering';

import classNames from 'classnames';

import Image from 'components/Image/Image';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';
import Link from 'components/Link/Link';

import styles from './MovieGridItem.scss';

class MovieGridItem extends Component {
  state = {
    descriptionOpen: false,
  };

  toggleDescriptionHandler = () => {
    const { descriptionOpen } = this.state;
    this.setState({ descriptionOpen: !descriptionOpen });
  }

  shouldComponentUpdate = (nextProps, nextState) => (
    nextState.descriptionOpen !== this.state.descriptionOpen
  )

  render() {
    const { descriptionOpen } = this.state;
    const { movie, genres } = this.props;
    // eslint-disable-next-line
    const { genre_ids } = movie;
    const infoClasses = classNames(
      styles.info,
      { [styles.infoVisible]: descriptionOpen },
    );

    const cancelClasses = classNames(
      styles.cancelIcon,
      { [styles.cancelIconVisible]: descriptionOpen },
    );

    const headerClasses = classNames(
      styles.header,
      { [styles.headerOffset]: descriptionOpen },
    );

    const descriptionClasses = classNames(
      styles.descriptionText,
      { [styles.descriptionTextVisible]: !descriptionOpen },
    );

    // eslint-disable-next-line
    const _genres = genre_ids
      .slice(0, 3)
      .map(genreId => genres.find(elem => elem.id === genreId));

    return (
      <div className={ styles.movieItem }>
        <Image
          db
          className={ styles.poster }
          width={ 300 }
          src={ movie.poster_path }
          alt={ movie.title }
        />

        { !descriptionOpen && <div className={ styles.more }>
          <Link params={{ trailer: movie.id }}>
            <div className={ styles.playButton }>
              <Icon className={ styles.playButtonIcon } name='play'/>
              <h3 className={ styles.playButtonHeader }>Play Now</h3>
            </div>
          </Link>

          <Button transparent label='View Info' onClick={ this.toggleDescriptionHandler }/>
        </div> }

        <div className={ infoClasses }>
          <div
            className={ cancelClasses }
            onClick={ this.toggleDescriptionHandler }
          >
            <Icon name='cancel' />
          </div>

          <header className={ headerClasses }>
            <Link params={{ movie: movie.id }}>
              <h1 title={ movie.title } className={ styles.title }>
                { movie.title }
              </h1>
            </Link>
            <p className={ styles.genres }>
              { _genres.map((genre, index) => (
                <Link
                  className={ styles.genre }
                  key={ index }
                  to={ `/genre/${genre.id}` }
                  clearParams={ ['query', 'movie'] }
                >
                  { genre.name }
                </Link>
              )) }
            </p>
            <div className={ styles.rating }>
              { (movie.vote_average / 2).toPrecision(2) }
            </div>
          </header>

          <p className={ descriptionClasses }>{ movie.overview }</p>

          <Link params={{ trailer: movie.id }}>
            <Button label='Watch Now' className={ styles.watchButton }/>
          </Link>
        </div>
      </div>
    );
  }
}

MovieGridItem.defaultProps = {
  movie: null,
};

MovieGridItem.propTypes = {
  movie: PropTypes.object,
};

export default withDialogContext(withConditionalRendering(MovieGridItem, 'movie'));
