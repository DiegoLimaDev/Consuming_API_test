import React, { useContext } from 'react';
import { MyContext, useIsDarkMode } from '../../utils/GlobalContext';
import { MySwitch } from '../Switch/Switch';
import { Text } from '../Text/Text';
import { Container, Row } from './HeaderStyle';

export const Header = () => {
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();

  return (
    <Container>
      <Row justify="space-between">
        <Text size="title" darkmode="dark">
          Polibras Software
        </Text>
        <Row>
          <Text size="big" darkmode="dark">
            Modo Escuro
          </Text>
          <MySwitch
            checked={isDarkMode === 'light' ? false : true}
            onClick={() =>
              setIsDarkMode(isDarkMode === 'light' ? 'dark' : 'light')
            }
          />
        </Row>
      </Row>
    </Container>
  );
};
