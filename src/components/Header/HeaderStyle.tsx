import styled from '@emotion/styled';
import { Box, css } from '@mui/material';

export const Container = styled(Box)(
  () => css`
    background-image: url('https://polibrassoftware.com.br/wp-content/uploads/2020/08/imagem-celular-app-polibras-2.jpg');
    background-repeat: no-repeat;
    height: 40rem;
    background-position-y: 40%;
    padding: 2rem;
  `,
);

export const SearchContainer = styled(Box)(
  () => css`
    position: absolute;
    top: 35%;
    margin-left: 2rem;
  `,
);
