import styled from '@emotion/styled';
import { Box, css } from '@mui/system';

export const Container = styled(Box)(
  () => css`
    padding: 2rem;
    justify-content: center;
    margin: 0 auto;
    display: block;
  `,
);
