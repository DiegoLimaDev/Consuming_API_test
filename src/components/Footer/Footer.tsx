import React from 'react';
import { useIsDarkMode } from '../../utils/GlobalContext';
import { Container, IconContainer, Row } from './FooterStyle';
import { Icon } from '@iconify/react';
import { theme } from '../../utils/theme';
import { Link } from '@mui/material';
import { Text } from '../Text/Text';

const icons = [
  'mdi:github',
  'mdi:email-outline',
  'ant-design:linkedin-outlined',
  'ic:outline-whatsapp',
];

const links = [
  'https://github.com/diegolimadev',
  'mailto:xxdiegolsxx@gmail.com',
  'https://www.linkedin.com/in/diegolimadev/',
  'https://api.whatsapp.com/send?phone=5581997086223&text=Tentei%20facilitar%20o%20m%C3%A1ximo%20pra%20voc%C3%AAs%20me%20darem%20a%20not%C3%ADcia%20da%20aprova%C3%A7%C3%A3o.%20Por%20favor,%20n%C3%A3o%20me%20fa%C3%A7am%20uma%20desfeita!%20hahaha',
];

export const Footer = () => {
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();
  return (
    <Container darkmode={isDarkMode}>
      <Row justify="space-between">
        <Text darkmode={isDarkMode === 'light' ? 'dark' : 'light'} size="big">
          Diego Lima da Silva &copy;
        </Text>
        <Row justify="space-around">
          {icons.map((e, i) => (
            <IconContainer key={i}>
              <Link href={links[i]} target="_blank">
                <Icon
                  icon={icons[i]}
                  height={40}
                  width={40}
                  color={
                    isDarkMode === 'light'
                      ? theme.colors.iceWhite
                      : theme.colors.black
                  }
                />
              </Link>
            </IconContainer>
          ))}
        </Row>
      </Row>
    </Container>
  );
};
