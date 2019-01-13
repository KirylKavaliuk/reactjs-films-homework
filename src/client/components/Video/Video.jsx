import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loading from 'components/Loading/Loading';

import request from 'utils/request';

import styles from './Video.scss';

export default class Video extends Component {
  state = {
    src: '',
    error: false,
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
      if (!this.state.src) {
        this.setState({ error: true });
      }
    }, 10000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { src } = this.state;
    const children = src
      ? <iframe className={ styles.video} src={ src } allowFullScreen></iframe>
      : <Loading className={ styles.loading }/>;

    return (
      <div className={ styles.videoWrapper }>
        { this.state.error
          ? <div className={ styles.error }>Error! Video is not found</div>
          : children }
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
