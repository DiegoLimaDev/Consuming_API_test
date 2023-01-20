import styled from '@emotion/styled';
import { Button, css } from '@mui/material';
import { theme } from '../../styles/theme';

export const MyButton = styled(Button)(
  () => css`
    font-size: ${theme.sizes.medium};
  `,
);
