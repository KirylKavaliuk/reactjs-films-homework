import React, { Component } from 'react';
import Link from 'components/Link/Link';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import Select from 'components/Select/Select';
import Icon from 'components/Icon/Icon';

import styles from './ListControls.scss';

export default class ListControls extends Component {
  setActiveStyleForLinks(sectionNumber) {
    const { url } = this.props.match;
    const sections = ['trading', 'top-rated', 'coming-soon'];
    const index = sections.findIndex(_section => url.indexOf(_section) !== -1);
    const defaultSection = url === '/' && sectionNumber === 0;

    return classNames(
      styles.section,
      { [styles.activeLink]: index === sectionNumber || defaultSection },
    );
  }

  render() {
    return (
      <menu className={ styles.menu }>
        <div className={ styles.listControls }>
          <ul className={ styles.sections }>
            <Link to='/trading'><li className={ this.setActiveStyleForLinks(0) }>Trading</li></Link>
            <Link to='/top-rated'><li className={ this.setActiveStyleForLinks(1) }>Top Rated</li></Link>
            <Link to='/coming-soon'><li className={ this.setActiveStyleForLinks(2) }>Coming soon</li></Link>
          </ul>
          <Select
            defaultValue='Genre'
            match={ this.props.match }
            list={ this.props.genres }
            element={ item => ({
              value: item.id,
              label: item.name,
              link: `/genre/${item.id}`,
            }) }
          />
        </div>
        <div className={ styles.typesView }>
          <div
            className={ classNames(
              styles.typeView,
              { [styles.activeTypeView]: this.props.gridView },
            ) }
            onClick={ () => this.props.setView(true) }
          >
            <Icon name='grid-view'/>
          </div>
          <div
            className={ classNames(
              styles.typeView,
              { [styles.activeTypeView]: !this.props.gridView },
            ) }
            onClick={ () => this.props.setView(false) }
          >
            <Icon name='list-view'/>
          </div>
        </div>
      </menu>
    );
  }
}

ListControls.defaultProps = {

};

ListControls.propTypes = {

};
