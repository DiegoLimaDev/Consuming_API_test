import React from 'react';
import { Container } from './BackgroundColorStyle';
import P from 'prop-types';

export const BackgroundColor = ({
  children,
  darkMode,
}: {
  children: any;
  darkMode: string;
}) => {
  return <Container darkMode={darkMode}>{children}</Container>;
};

BackgroundColor.propTypes = {
  children: P.node,
  darkMode: P.string.isRequired,
};
