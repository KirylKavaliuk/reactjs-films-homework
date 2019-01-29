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

  timer = null;

  componentDidMount() {
    const { loaded } = this.state;
    const { id } = this.props;

    this.timer = setTimeout(() => {
      if (!loaded) {
        this.setState({ error: true });
      }
    }, 7000);

    http.get(`db/movie/${id}/videos`)
      .then(({ results }) => {
        this.setState({
          src: `http://www.youtube.com/embed/${results[0].key}`,
        });
      });
  }

  onLoadHandler = () => {
    this.setState({ loaded: true });
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
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
