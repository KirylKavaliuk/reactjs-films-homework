import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link/Link';

import classNames from 'classnames';

import Icon from 'components/Icon/Icon';

import styles from './Select.scss';

export default class Select extends Component {
  state = {
    open: false,
  };

  openHandler = () => {
    this.setState({ open: true });
  }

  closeHandler = () => {
    this.setState({ open: false });
  }

  closeSelectHandler = (event) => {
    this.setState({ open: false });
  }

  renderList = () => (
    this.props.list.map((item, index) => {
      const elem = this.props.element(item);
      const Item = <li
        className={ styles.item }
        onClick={ this.closeSelectHandler }
      >{ elem.label }</li>;

      if (elem.link) {
        return <Link
          className={ styles.itemLink }
          key={ index }
          to={ elem.link }
        >{ Item }</Link>;
      }

      return Item;
    })
  )

  render() {
    const genre = this.props.list.find(item => (
      item.id === +this.props.match.params.genreId
    ));

    return (
      <div className={
        classNames(
          styles.select,
          { [this.props.className]: this.props.className },
          { [styles.active]: this.props.match.url.includes('/genre') },
        )
         } onMouseLeave={ this.closeHandler }>
        <div className={ styles.main } onClick={ this.openHandler }>
          <span className={ styles.value }>{ genre ? genre.name : 'Genre' }</span>
          <Icon name='arrow' className={ classNames(
            styles.arrow,
            { [styles.arrowOpen]: this.state.open },
          ) }/>
        </div>
        <ul className={
          classNames(
            styles.list,
            { [styles.listOpen]: this.state.open },
          )
        }>
          { this.renderList() }
        </ul>
      </div>
    );
  }
}

Select.defaultProps = {

};

Select.propTypes = {

};
