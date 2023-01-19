import { Stack } from '@mui/system';
import React from 'react';
import P from 'prop-types';
import { useCategory, useIsDarkMode } from '../../utils/GlobalContext';
import {
  Container,
  CustomInputLabel,
  MyMenuItem,
  MySelect,
} from './SelectCategoryStyle';
import { Text } from '../Text/Text';

export const SelectCategory = ({ margin }: { margin?: string }) => {
  const { category, setCategory } = useCategory();
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();

  return (
    <Container margin={margin}>
      <Stack direction="row" alignItems="center">
        <CustomInputLabel id="demo-simple-select-label">
          <Text size="big" darkmode={isDarkMode}>
            Categoria
          </Text>
        </CustomInputLabel>
        <MySelect
          label="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          labelId="demo-simple-select-label"
        >
          <MyMenuItem value={'All'}>Todas</MyMenuItem>
          <MyMenuItem value={`men's clothing`}>Moda Masculina</MyMenuItem>
          <MyMenuItem value={`women's clothing`}>Moda feminina</MyMenuItem>
          <MyMenuItem value={`electronics`}>Eletrônicos</MyMenuItem>
          <MyMenuItem value={`jewelery`}>Jóias</MyMenuItem>
        </MySelect>
      </Stack>
    </Container>
  );
};

SelectCategory.propTypes = {
  margin: P.string,
};
