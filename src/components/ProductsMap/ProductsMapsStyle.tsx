import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { Box, css } from '@mui/system';
import { theme } from '../../utils/theme';

export const Container = styled(Box)(
  () => css`
    display: block;
    margin: 0 auto;
  `,
);

export const NotFoundContainer = styled(Box)(
  () => css`
    display: block;
    margin: 10rem auto 0 auto;
    width: fit-content;
    min-height: 40rem;

    @media (max-width: 600px) {
      width: 80%;
      text-align: center;
    }
  `,
);

export const SearchContainer = styled(Box)(
  () => css`
    padding: 2rem;
    margin-left: 2rem;

    @media (max-width: 600px) {
      margin-left: 4rem;
    }
  `,
);

export const MyCustomStack = styled(Stack)(
  () => css`
    width: 30%;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
);

export const CustomSeparator = styled(Box)(
  () => css`
    width: 0;
    height: 0;

    @media (max-width: 600px) {
      height: 2rem;
    }
  `,
);
