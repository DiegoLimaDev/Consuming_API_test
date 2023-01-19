import { Stack } from '@mui/system';
import React from 'react';
import { useIsDarkMode } from '../../utils/GlobalContext';
import { MySwitch } from '../Switch/Switch';
import { Text } from '../Text/Text';
import { Container } from './HeaderStyle';

export const Header = () => {
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();

  return (
    <Container>
      <Stack direction="column">
        <Text size="title" darkmode="dark" margin="0 0 0 2rem">
          Polibras Software
        </Text>
        <Text size="medium2" darkmode="dark" margin="1rem 0 1rem 2rem">
          Teste Técnico
        </Text>
        <Text size="medium2" darkmode="dark" margin="1rem 0 3rem 2rem">
          Estágio frontend
        </Text>
        <Stack direction="row">
          <Text size="big" darkmode="dark" margin="0 0 0 2rem">
            Modo Escuro
          </Text>
          <MySwitch
            checked={isDarkMode === 'light' ? false : true}
            onClick={() =>
              setIsDarkMode(isDarkMode === 'light' ? 'dark' : 'light')
            }
          />
        </Stack>
      </Stack>
    </Container>
  );
};
