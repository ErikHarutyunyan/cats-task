import React from 'react';
// Import Style
import { HeaderWrapper } from './Header.styled';

const Header = ({ children }) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};

export { Header };
