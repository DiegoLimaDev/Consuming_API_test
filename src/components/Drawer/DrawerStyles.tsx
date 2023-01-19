import styled from '@emotion/styled';
import { Drawer, Rating } from '@mui/material';
import { Box, css } from '@mui/system';
import { theme } from '../../utils/theme';

export const Container = styled(Box)(
  () => css`
    padding: 2rem;
  `,
);

export const MyDrawer = styled(Drawer)(() => css``);

export const CustomImage = styled.img`
  display: block;
  margin: 1rem auto;
  cursor: zoom-in;
  transition: all 200ms ease-in-out;

  :hover {
    transform: scale(1.2);
  }
`;

export const CustomRating = styled(Rating)(
  () => css`
    font-size: 6.5rem;
  `,
);

export const RatingContainer = styled(Box)(
  () => css`
    display: block;
    margin: 1rem auto;
  `,
);
