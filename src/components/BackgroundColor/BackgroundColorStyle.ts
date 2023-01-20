import styled from '@emotion/styled';
import { Box, css } from '@mui/system';
import { theme } from '../../styles/theme';

export const Container = styled(Box)(
  ({ darkmode }: { darkmode: string }) => css`
    background-color: ${darkmode === 'dark'
      ? theme.colors.black
      : theme.colors.iceWhite};
  `,
);
