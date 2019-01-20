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
            <Link to='/trading' clearParams={['query', 'movie']}><li className={ styles.section }>Trading</li></Link>
            <Link to='/top-rated' clearParams={['query', 'movie']}><li className={ styles.section }>Top Rated</li></Link>
            <Link to='/coming-soon' clearParams={['query', 'movie']}><li className={ styles.section }>Coming soon</li></Link>
          </ul>
          <Select
            match={ this.props.match }
            genres={ this.props.genres }
          />
        </div>
        <div className={ styles.typesView }>
          <Link params={{ view: 'grid' }}>
            <div
              className={ classNames(
                styles.typeView,
                { [styles.activeTypeView]: this.props.gridView },
              ) }
            >
              <Icon name='grid-view'/>
            </div>
          </Link>
          <Link params={{ view: 'list' }}>
            <div
              className={ classNames(
                styles.typeView,
                { [styles.activeTypeView]: !this.props.gridView },
              ) }
            >
              <Icon name='list-view'/>
            </div>
          </Link>
        </div>
      </menu>
    );
  }
}

ListControls.defaultProps = {

};

ListControls.propTypes = {

};
