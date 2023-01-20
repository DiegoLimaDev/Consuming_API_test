import styled from '@emotion/styled';
import { Box, css, Grid, Paper } from '@mui/material';
import { theme } from '../../styles/theme';

export const MyGrid = styled(Grid)(
  ({ darkmode }: { darkmode: string }) => css`
    margin: 5rem 2rem 0 4rem;
    min-height: 50rem;
    background-color: ${darkmode === 'dark'
      ? theme.colors.black
      : theme.colors.iceWhite};
    position: relative;
    width: 33rem;
  `,
);

export const Item = styled(Paper)(
  ({ darkmode }: { darkmode?: string }) => css`
    padding: 2rem;
    text-align: 'center';
    color: ${theme.colors.black};
    height: 45rem;
    background-color: ${darkmode === 'dark'
      ? theme.colors.black
      : theme.colors.iceWhite};
  `,
);

export const CustomImage = styled.img`
  display: block;
  margin: 0 auto;
`;

export const ButtonContainer = styled(Box)(
  () => css`
    display: block;
    margin: 0 auto;
  `,
);
