import styled from '@emotion/styled';
import { Box, css } from '@mui/material';
import { theme } from '../../utils/theme';

export const Container = styled(Box)(
  ({ size, darkMode }: { size: string; darkMode: string }) => css`
    font-family: 'Nunito', sans-serif;
    font-size: ${size === 'small'
      ? theme.sizes.small
      : size === 'medium'
      ? theme.sizes.medium
      : size === 'big'
      ? theme.sizes.big
      : theme.sizes.title};
    color: ${darkMode === 'dark' ? theme.colors.iceWhite : theme.colors.black};
  `,
);
