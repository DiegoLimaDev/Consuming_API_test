import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Container } from './LoaderStyles';
import P from 'prop-types';
import { Text } from '../Text/Text';

export const Loader = ({ visible }: { visible: boolean }) => {
  return (
    <Container>
      <TailSpin
        height="80"
        width="80"
        color="#000000"
        ariaLabel="Carregando dados..."
        radius="2"
        visible={visible}
      />
      <Text>Carregando dados...</Text>
    </Container>
  );
};

Loader.propTypes = {
  visible: P.bool.isRequired,
};
