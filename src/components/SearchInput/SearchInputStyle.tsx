import styled from '@emotion/styled';
import { OutlinedInput } from '@mui/material';
import { Box, css } from '@mui/system';
import { theme } from '../../utils/theme';

export const Container = styled(Box)(
  () => css`
    bottom: 0;
    height: fit-content;
    width: fit-content;
  `,
);

export const CustomInput = styled(OutlinedInput)(
  () => css`
    background-color: ${theme.colors.mediumWhite};
    font-size: ${theme.sizes.medium};
    height: 5rem;
    width: 30rem;
    margin: 0;
  `,
);
