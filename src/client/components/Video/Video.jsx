import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loading from 'components/Loading/Loading';

import request from 'utils/request';

import styles from './Video.scss';

export default class Video extends Component {
  state = {
    src: '',
    error: false,
    loaded: false,
  }

  timer = null;

  componentWillMount() {
    request.get(`/db/movie/${this.props.id}/videos`)
      .then(({ results }) => {
        this.setState({
          src: `http://www.youtube.com/embed/${results[0].key}`,
        });
      });
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      if (!this.state.loaded) {
        this.setState({ error: true });
      }
    }, 10000);
  }

  onLoadHandler = () => {
    this.setState({ loaded: true });
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { src } = this.state;

    return (
      <div className={ styles.videoWrapper }>
        { !this.state.error
        && <iframe
            onLoad={ this.onLoadHandler }
            className={ styles.video }
            src={ src }
            allowFullScreen
          ></iframe> }
        { !this.state.error && !this.state.loaded && <Loading className={ styles.loading }/> }
        { this.state.error && <div className={ styles.error }>Error! Video is not loaded.</div> }
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
