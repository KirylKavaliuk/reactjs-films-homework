import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link/Link';

import classNames from 'classnames';

import Icon from 'components/Icon/Icon';

import styles from './Select.scss';

export default class Select extends Component {
  state = {
    open: false,
    value: 'Genre',
  };

  openHandler = () => {
    this.setState({ open: true });
  }

  closeHandler = () => {
    this.setState({ open: false });
  }

  componentWillReceiveProps(props) {
    const { genreId } = props.match.params;
    const value = props.genres.find(_genre => _genre.id === +genreId);

    this.setState({ value: value ? value.name : 'Genre' });
  }

  render() {
    const { open, value } = this.state;
    const { className, genres, match } = this.props;

    const selectClasses = classNames(
      styles.select,
      { [className]: className },
      { [styles.active]: match.url.includes('/genre') },
    );

    const arrowClasses = classNames(styles.arrow, { [styles.arrowOpen]: open });
    const listClasses = classNames(styles.list, { [styles.listOpen]: open });

    return (
      <div className={ selectClasses } onMouseLeave={ this.closeHandler }>
        <div className={ styles.main } onClick={ this.openHandler }>
          <span className={ styles.value }>{ value }</span>
          <Icon name='arrow' className={ arrowClasses }/>
        </div>
        <div className={ listClasses }>
          { genres.map(genre => (
            <Link
              key={ genre.id }
              className={ styles.item }
              onClick={ this.closeHandler }
              to={ `/genre/${genre.id}` }
              clearParams={ ['query', 'movie'] }
            >{ genre.name }</Link>
          )) }
        </div>
      </div>
    );
  }
}

Select.defaultProps = {
  genres: [],
  match: {},
};

Select.propTypes = {
  genres: PropTypes.array,
  match: PropTypes.object,
};
