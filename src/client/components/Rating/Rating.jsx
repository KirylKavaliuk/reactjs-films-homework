import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withMessageContext } from 'utils/message';

import classNames from 'classnames';

import styles from './Rating.scss';

class Rating extends Component {
  state = {
    onHover: -1,
  }

  onHoverHandler = (rating) => {
    this.setState({ onHover: rating });
  }

  sentRatingHandler = (rating) => {
    const { value, openMessage } = this.props;

    if (value) {
      openMessage(`Your rating (${rating}) has been sent. Thank you!`);
    }
  }

  render() {
    return (
      <div className={ styles.rating }>
        { Array.from({ length: 5 }, (v, k) => (
          <div
            key={ k }
            className={ classNames(
              styles.star,
              { [styles.active]: k < Math.round(this.props.value) && this.state.onHover === -1 },
              { [styles.onHover]: this.state.onHover >= k },
            ) }
            onMouseOut={ () => this.onHoverHandler(-1) }
            onMouseOver={ () => this.onHoverHandler(k) }
            onClick={ () => this.sentRatingHandler(k + 1) }
          />)) }
        <div className={ styles.ratingNumberWrap }>
          <div className={ styles.ratingNumber }>
            { this.state.onHover !== -1
              ? this.state.onHover + 1
              : (this.props.value || 0).toPrecision(3) }
          </div>
        </div>
      </div>
    );
  }
}

Rating.defaultProps = {
  value: 0,
};

Rating.propTypes = {
  value: PropTypes.number,
};

export default withMessageContext(Rating);
