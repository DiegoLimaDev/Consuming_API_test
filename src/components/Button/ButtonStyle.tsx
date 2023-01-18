import styled from '@emotion/styled';
import { Button, css } from '@mui/material';
import { theme } from '../../utils/theme';

export const MyButton = styled(Button)(
  () => css`
    font-size: ${theme.sizes.medium};
  `,
);
