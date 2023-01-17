import React from 'react';
import { Container } from './BackgroundColorStyle';
import P from 'prop-types';

export const BackgroundColor = ({
  children,
  darkmode,
}: {
  children: any;
  darkmode: string;
}) => {
  return <Container darkmode={darkmode}>{children}</Container>;
};

BackgroundColor.propTypes = {
  children: P.node,
  darkmode: P.string.isRequired,
};
