import React, { Component } from 'react';
import PropTypes from 'prop-types';

import request from 'utils/request';

import styles from './Video.scss';

export default class Video extends Component {
  state = {
    src: '',
  }

  componentWillMount() {
    request.get(`/db/movie/${this.props.id}/videos`)
      .then(({ results }) => {
        this.setState({
          src: `http://www.youtube.com/embed/${results[0].key}`,
        });
      });
  }

  render() {
    const { src } = this.state;

    return (
      <div className={ styles.videoWrapper }>
        { src && <iframe className={ styles.video} src={ src } allowFullScreen></iframe> }
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
