import React from 'react';
import { Container } from './TextStyles';
import P from 'prop-types';

export const Text = ({ children }: { children: any }) => {
  return (
    <Container>
      <p>{children}</p>
    </Container>
  );
};

Text.propTypes = {
  children: P.any.isRequired,
};
