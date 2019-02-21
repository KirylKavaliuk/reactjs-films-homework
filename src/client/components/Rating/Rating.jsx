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

  sendRatingHandler = (rating) => {
    const { value, openMessage } = this.props;

    if (value) {
      openMessage(`Your rating (${rating}) has been sent. Thank you!`);
    }
  }

  renderStars = () => (
    Array.from({ length: 5 }, (v, k) => {
      const { value } = this.props;
      const { onHover } = this.state;
      const starClasses = classNames(
        styles.star,
        { [styles.active]: k < Math.round(value) && onHover === -1 },
        { [styles.onHover]: onHover >= k },
      );

      return (
        <div
          key={ k }
          className={ starClasses }
          onMouseOut={ () => this.onHoverHandler(-1) }
          onMouseOver={ () => this.onHoverHandler(k) }
          onClick={ () => this.sendRatingHandler(k + 1) }
        />
      );
    })
  )

  render() {
    const { value } = this.props;
    const { onHover } = this.state;

    return (
      <div className={ styles.rating }>
        { this.renderStars() }
        <div className={ styles.ratingNumberWrap }>
          <div className={ styles.ratingNumber }>
            { onHover !== -1
              ? onHover + 1
              : (value || 0).toPrecision(3) }
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
