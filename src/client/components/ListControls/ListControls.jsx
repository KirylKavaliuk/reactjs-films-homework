import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { getSection } from 'utils/url';

import Select from 'components/Select/Select';
import Icon from 'components/Icon/Icon';
import Link from 'components/Link/Link';

import styles from './ListControls.scss';

export default class ListControls extends Component {
  static setActiveStyleForLinks = (sectionNumber) => {
    const section = getSection();
    const sections = ['trading', 'top-rated', 'coming-soon'];
    const index = sections.findIndex(_section => section.indexOf(_section) !== -1);
    const defaultSection = section === '/' && sectionNumber === 0;

    return classNames(
      styles.section,
      { [styles.activeLink]: index === sectionNumber || defaultSection },
    );
  }

  static setTypeViewClasses = gridView => (
    classNames(styles.typeView, { [styles.activeTypeView]: gridView })
  )

  render() {
    const { match, genres, gridView } = this.props;

    return (
      <menu className={ styles.menu }>
        <div className={ styles.listControls }>
          <ul className={ styles.sections }>
            <Link to='/trading' clearParams={['query', 'movie']}>
              <li className={ ListControls.setActiveStyleForLinks(0) }>Trading</li>
            </Link>
            <Link to='/top-rated' clearParams={['query', 'movie']}>
              <li className={ ListControls.setActiveStyleForLinks(1) }>Top Rated</li>
            </Link>
            <Link to='/coming-soon' clearParams={['query', 'movie']}>
              <li className={ ListControls.setActiveStyleForLinks(2) }>Coming soon</li>
            </Link>
          </ul>
          <Select match={ match } genres={ genres }/>
        </div>
        <div className={ styles.typesView }>
          <Link params={{ view: 'grid' }} aria-label="grid-view">
            <div className={ ListControls.setTypeViewClasses(gridView) }>
              <Icon name='grid-view'/>
            </div>
          </Link>
          <Link params={{ view: 'list' }} aria-label="list-view">
            <div className={ ListControls.setTypeViewClasses(!gridView) }>
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
