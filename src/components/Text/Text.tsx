import React from 'react';
import { Container } from './TextStyles';
import P from 'prop-types';

export const Text = ({
  children,
  size,
  darkMode,
}: {
  children: any;
  size: string;
  darkMode: string;
}) => {
  return (
    <Container size={size} darkMode={darkMode}>
      <p>{children}</p>
    </Container>
  );
};

Text.propTypes = {
  children: P.any.isRequired,
  size: P.string.isRequired,
  darkMode: P.string,
};
