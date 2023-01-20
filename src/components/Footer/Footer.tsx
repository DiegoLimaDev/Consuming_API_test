import React from 'react';
import { useIsDarkMode } from '../../utils/GlobalContext';
import { Container, CustomStack, IconContainer } from './FooterStyle';
import { Icon } from '@iconify/react';
import { theme } from '../../styles/theme';
import { Link } from '@mui/material';
import { Text } from '../Text/Text';
import { icons, links } from '../../utils/FooterArraysData';

export const Footer = () => {
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();
  return (
    <Container darkmode={isDarkMode}>
      <CustomStack justify="space-between">
        <Text
          darkmode={isDarkMode === 'light' ? 'dark' : 'light'}
          size="big"
          weight="bold"
        >
          Diego Lima da Silva &copy;
        </Text>
        <CustomStack justify="space-around" icons="true">
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
        </CustomStack>
      </CustomStack>
    </Container>
  );
};
