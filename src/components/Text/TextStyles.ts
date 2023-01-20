import styled from '@emotion/styled';
import { Box, css } from '@mui/material';
import { theme } from '../../utils/theme';

export const Container = styled(Box)(
  ({
    size,
    darkmode,
    align,
    margin,
  }: {
    size: string;
    darkmode?: string;
    align?: string;
    margin?: string;
  }) => css`
    font-family: 'Nunito', sans-serif;
    font-size: ${size === 'small'
      ? theme.sizes.small
      : size === 'medium'
      ? theme.sizes.medium
      : size === 'medium2'
      ? theme.sizes.medium2
      : size === 'big'
      ? theme.sizes.big
      : theme.sizes.title};
    color: ${darkmode === 'dark' ? theme.colors.iceWhite : theme.colors.black};
    text-align: ${align};
    margin: ${margin};
  `,
);
