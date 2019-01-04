import React from 'react';
import PropTypes from 'prop-types';
import withConditionalRendering from 'utils/withConditionalRendering';

import Star from 'icons/star.svg';
import Search from 'icons/search.svg';
import Play from 'icons/play.svg';
import Cancel from 'icons/cancel.svg';
import Circle from 'icons/circle.svg';
import Arrow from 'icons/arrow.svg';
import gridView from 'icons/grid-view.svg';
import listView from 'icons/list-view.svg';

const icons = {
  star: Star,
  search: Search,
  play: Play,
  cancel: Cancel,
  circle: Circle,
  arrow: Arrow,
  'grid-view': gridView,
  'list-view': listView,
};

const Icon = ({ name, className }) => {
  const Component = icons[name.toLowerCase()];

  if (Component) {
    return <Component className={ className }/>;
  }

  return <Circle/>;
};

Icon.defaultProps = {
  className: '',
  name: 'star',
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

export default withConditionalRendering(Icon, ['name']);
