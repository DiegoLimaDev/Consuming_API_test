import React from 'react';
import { Container } from './TextStyles';
import P from 'prop-types';

export const Text = ({
  children,
  size,
  darkmode,
}: {
  children: any;
  size: string;
  darkmode: string;
}) => {
  return (
    <Container size={size} darkmode={darkmode}>
      <p>{children}</p>
    </Container>
  );
};

Text.propTypes = {
  children: P.any.isRequired,
  size: P.string.isRequired,
  darkmode: P.string,
};
