import React from 'react';
import { Container } from './TextStyles';
import P from 'prop-types';

export const Text = ({
  children,
  size,
  darkmode,
  align,
  weight,
  margin,
}: {
  children?: any;
  size: string;
  darkmode?: string;
  align?: string;
  weight?: string;
  margin?: string;
}) => {
  return (
    <Container
      size={size}
      darkmode={darkmode}
      align={align}
      margin={margin}
      weight={weight}
    >
      <p>{children}</p>
    </Container>
  );
};

Text.propTypes = {
  children: P.any,
  size: P.string.isRequired,
  darkmode: P.string,
  align: P.string,
  weight: P.string,
  margin: P.string,
};
