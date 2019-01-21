import React, { Component } from 'react';
import Link from 'components/Link/Link';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { getSection } from 'utils/url';

import Select from 'components/Select/Select';
import Icon from 'components/Icon/Icon';

import styles from './ListControls.scss';

export default class ListControls extends Component {
  setActiveStyleForLinks(sectionNumber) {
    const section = getSection();
    const sections = ['trading', 'top-rated', 'coming-soon'];
    const index = sections.findIndex(_section => section.indexOf(_section) !== -1);
    const defaultSection = section === '/' && sectionNumber === 0;

    const that = this;

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
            <Link to='/trading' clearParams={['query', 'movie']}>
              <li className={ this.setActiveStyleForLinks(0) }>Trading</li>
            </Link>
            <Link to='/top-rated' clearParams={['query', 'movie']}>
              <li className={ this.setActiveStyleForLinks(1) }>Top Rated</li>
            </Link>
            <Link to='/coming-soon' clearParams={['query', 'movie']}>
              <li className={ this.setActiveStyleForLinks(2) }>Coming soon</li>
            </Link>
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
  match: {},
  genres: [],
  gridView: true,
};

ListControls.propTypes = {
  match: PropTypes.object,
  genres: PropTypes.array,
  gridView: PropTypes.bool,
};
