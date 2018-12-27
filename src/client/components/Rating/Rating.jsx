import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './Rating.scss';

class Rating extends Component {
  state = {
    onHover: -1,
  }

  onHoverHandler(rating) {
    this.setState({ onHover: rating });
  }

  render() {
    return (
      <div className={ styles.rating }>
        { Array.from({ length: 5 }, (v, k) => {
          const width = this.props.value - k;

          return (<div
            key={ k }
            className={ styles.star }
            onMouseOut ={ () => this.onHoverHandler(-1) }
            onMouseOver ={ () => this.onHoverHandler(k) }
          >
            <div
              className={
                classNames(
                  { [styles.value]: this.state.onHover < 0 },
                  { [styles.onHover]: this.state.onHover >= k },
                )
               }
              style={ this.state.onHover === -1 ? { width: `${width >= 0 ? width * 100 : 0}%` } : { }}
            >
            </div>
          </div>);
        }) }
        <div className={ styles.ratingNumberWrap }>
          <div className={ styles.ratingNumber }>
            { this.state.onHover !== -1
              ? this.state.onHover + 1
              : (this.props.value % 5).toPrecision(2) }
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

export default Rating;
