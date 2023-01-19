import { Stack } from '@mui/material';
import React from 'react';
import { useIsDarkMode, useOrderBy } from '../../utils/GlobalContext';
import { Text } from '../Text/Text';
import {
  Container,
  CustomInputLabel,
  MyMenuItem,
  MySelect,
} from './SelectOrderStyle';

export const SelectOrder = () => {
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();
  const { orderBy, setOrderBy } = useOrderBy();

  return (
    <Container>
      <Stack direction="row" alignItems="center">
        <CustomInputLabel id="demo-simple-select-label">
          <Text size="big" darkmode={isDarkMode}>
            Ordem
          </Text>
        </CustomInputLabel>
        <MySelect
          label="Categoria"
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value)}
          labelId="demo-simple-select-label"
        >
          <MyMenuItem value={'initial'}>Original</MyMenuItem>
          <MyMenuItem value={`highest`}>Maior preço</MyMenuItem>
          <MyMenuItem value={`lowest`}>Menor preço</MyMenuItem>
          <MyMenuItem value={`rating`}>Avaliações</MyMenuItem>
        </MySelect>
      </Stack>
    </Container>
  );
};
