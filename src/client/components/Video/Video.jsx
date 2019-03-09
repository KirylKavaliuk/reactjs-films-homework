import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loading from 'components/Loading/Loading';

import http from 'utils/http';

import styles from './Video.scss';

export default class Video extends Component {
  state = {
    src: '',
    error: false,
    loaded: false,
  }

  componentDidMount() {
    this.loadVideoSrc();
  }

  loadVideoSrc = async () => {
    const { id } = this.props;

    try {
      const { results } = await http.get(`db/movie/${id}/videos`);

      if (results && results[0] && results[0].key) {
        this.setState({ src: `https://www.youtube.com/embed/${results[0].key}` });
      } else {
        throw new Error('not loaded');
      }
    } catch (err) {
      this.setState({ error: true, loaded: true });
    }
  }

  onLoadHandler = () => {
    this.setState({ loaded: true });
  }

  render() {
    const { src, error, loaded } = this.state;

    return (
      <div className={ styles.videoWrapper }>
        { !error
        && <iframe
            onLoad={ this.onLoadHandler }
            className={ styles.video }
            src={ src }
            allowFullScreen
          ></iframe> }
        { !error && !loaded && <Loading className={ styles.loading }/> }
        { error && <div className={ styles.error }>Error! Video is not loaded.</div> }
      </div>
    );
  }
}

Video.defaultProps = {
  id: 0,
};

Video.propTypes = {
  id: PropTypes.number,
};
