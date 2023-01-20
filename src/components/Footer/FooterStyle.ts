import styled from '@emotion/styled';
import { Box, css, Stack } from '@mui/material';
import { theme } from '../../utils/theme';

export const Container = styled(Box)(
  ({ darkmode }: { darkmode: string }) => css`
    padding: 2rem;
    height: 5rem;
    bottom: 0;
    background-color: ${darkmode === 'dark'
      ? theme.colors.iceWhite
      : theme.colors.black};

    @media (max-width: 600px) {
      height: fit-content;
    }
  `,
);

export const IconContainer = styled(Box)(
  () => css`
    cursor: pointer;
    width: fit-content;
    margin: 0 2rem;

    :hover {
      transform: scale(1.2);
      transition: all 200ms ease-in-out;
    }
  `,
);

export const CustomStack = styled(Stack)(
  ({ justify, icons }: { justify: string; icons?: string }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${justify};

    @media (max-width: 600px) {
      flex-direction: ${icons === 'true' ? 'row' : 'column'};
      justify-content: center;
    }
  `,
);
