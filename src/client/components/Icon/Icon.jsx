import React from 'react';
import PropTypes from 'prop-types';
import withConditionalRendering from 'utils/withConditionalRendering';

import Star from 'icons/star.svg';
import Search from 'icons/search.svg';

const icons = {
  star: Star,
  search: Search,
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
