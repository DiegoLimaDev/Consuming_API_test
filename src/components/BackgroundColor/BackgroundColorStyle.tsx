import styled from '@emotion/styled';
import { Box, css } from '@mui/system';
import { theme } from '../../utils/theme';

export const Container = styled(Box)(
  ({ darkMode }: { darkMode: string }) => css`
    background-color: ${darkMode === 'dark'
      ? theme.colors.black
      : theme.colors.iceWhite};
  `,
);
