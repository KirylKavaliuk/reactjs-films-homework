import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import Icon from 'components/Icon/Icon';

import styles from './Select.scss';

export default class Select extends Component {
  state = {
    value: this.props.defaultValue || 'Select...',
    open: false,
  };

  openHandler = () => {
    this.setState({ open: true });
  }

  closeHandler = () => {
    this.setState({ open: false });
  }

  closeSelectHandler = (event) => {
    const { innerText } = event.target;
    const { value } = this.state;

    this.setState({
      open: false,
      value: innerText || value,
    });
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
    return (
      <div className={
        classNames(
          styles.select,
          { [this.props.className]: this.props.className },
        )
         } onMouseLeave={ this.closeHandler }>
        <div className={ styles.main } onClick={ this.openHandler }>
          <span className={ styles.value }>{ this.state.value }</span>
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
