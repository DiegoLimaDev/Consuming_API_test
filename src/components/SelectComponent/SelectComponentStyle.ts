import styled from '@emotion/styled';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { Box, css } from '@mui/system';
import { theme } from '../../styles/theme';

export const Container = styled(Box)(
  ({ margin }: { margin?: string }) =>
    css`
      margin: ${margin};
    `,
);

export const MySelect = styled(Select)(
  () => css`
    background-color: ${theme.colors.mediumWhite};
    font-size: ${theme.sizes.medium};
    height: 5rem;
    min-width: 10rem;
  `,
);

export const CustomInputLabel = styled(InputLabel)(
  () => css`
    color: ${theme.colors.iceWhite};
    font-size: ${theme.sizes.medium2};
    margin-right: 2rem;
  `,
);

export const MyMenuItem = styled(MenuItem)(
  () => css`
    font-size: ${theme.sizes.medium};
  `,
);
