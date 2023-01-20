import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { Box, css } from '@mui/system';
import { theme } from '../../styles/theme';

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
      display: block;
      margin: 0 auto;
    }
  `,
);

export const MyCustomStack = styled(Stack)(
  () => css`
    width: fit-content;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
);

export const CustomSeparator = styled(Box)(
  () => css`
    width: 2rem;
    height: 0;

    @media (max-width: 900px) {
      height: 2rem;
    }
  `,
);
