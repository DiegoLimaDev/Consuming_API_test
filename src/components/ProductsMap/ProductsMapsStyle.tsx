import styled from '@emotion/styled';
import { Grid, Paper, Rating } from '@mui/material';
import { Box, css } from '@mui/system';
import { theme } from '../../utils/theme';

export const NotFoundContainer = styled(Box)(
  () => css`
    display: block;
    margin: 10rem auto;
    width: fit-content;
    min-height: 30rem;
  `,
);

export const Item = styled(Paper)(
  () => css`
    padding: 2rem;
    text-align: 'center';
    color: ${theme.colors.black};
    height: 35rem;
  `,
);

export const MyGrid = styled(Grid)(
  ({ darkmode }: { darkmode: string }) => css`
    margin: 5rem 2rem 0 4rem;
    min-height: 50rem;
    background-color: ${darkmode === 'dark'
      ? theme.colors.black
      : theme.colors.iceWhite};
    width: fit-content;
  `,
);

export const CustomImage = styled.img`
  display: block;
  margin: 0 auto;
`;

export const ButtonContainer = styled(Box)(
  () => css`
    margin-top: 2rem;
  `,
);
