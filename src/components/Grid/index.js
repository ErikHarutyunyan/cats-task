import React from 'react';
// Import Style
import { SectionWrapper } from './Grid.styled';

import PropTypes from 'prop-types';

const Grid = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
export { Grid };
