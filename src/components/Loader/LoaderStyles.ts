import styled from '@emotion/styled';
import { Box, css } from '@mui/system';

export const Container = styled(Box)(
  () => css`
    padding: 2rem;
    margin: 0 auto;
    display: block;
    width: fit-content;
    min-height: 52rem;
    align-items: center;
  `,
);

export const TailSpinStyle = {
  marginTop: '5rem',
};
