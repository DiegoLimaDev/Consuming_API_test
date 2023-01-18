import styled from '@emotion/styled';
import { Drawer, Rating } from '@mui/material';
import { Box, css } from '@mui/system';
import { theme } from '../../utils/theme';

export const Container = styled(Box)(() => css``);

export const MyDrawer = styled(Drawer)(
  () => css`
    margin: 5rem;
  `,
);

export const CustomImage = styled.img`
  display: block;
  margin: 2rem auto;
`;

export const CustomRating = styled(Rating)(
  () => css`
    font-size: 10rem;
  `,
);

export const RatingContainer = styled(Box)(
  () => css`
    display: block;
    margin: 2rem auto;
  `,
);
