import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Container, TailSpinStyle } from './LoaderStyles';
import P from 'prop-types';
import { Text } from '../Text/Text';
import { useIsDarkMode } from '../../utils/GlobalContext';
import { theme } from '../../utils/theme';

export const Loader = ({ visible }: { visible: boolean }) => {
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();
  return (
    <Container>
      <ThreeDots
        height="120"
        width="200"
        color={
          isDarkMode === 'dark' ? theme.colors.iceWhite : theme.colors.black
        }
        ariaLabel="Carregando dados..."
        radius="2"
        visible={visible}
        wrapperStyle={TailSpinStyle}
      />
      <Text size="big" darkmode={isDarkMode}>
        Carregando dados...
      </Text>
    </Container>
  );
};

Loader.propTypes = {
  visible: P.bool.isRequired,
};
