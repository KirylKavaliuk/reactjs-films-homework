import React from 'react';
import PropTypes from 'prop-types';
import withConditionalRendering from 'utils/withConditionalRendering';

import Star from 'icons/star.svg';
import Search from 'icons/search.svg';
import Play from 'icons/play.svg';
import Cancel from 'icons/cancel.svg';

const icons = {
  star: Star,
  search: Search,
  play: Play,
  cancel: Cancel,
};

const Icon = ({ name, className }) => {
  const Component = icons[name.toLowerCase()];

  return <Component className={ className }/>;
};

Icon.defaultProps = {
  className: '',
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

export default withConditionalRendering(Icon, ['name']);
