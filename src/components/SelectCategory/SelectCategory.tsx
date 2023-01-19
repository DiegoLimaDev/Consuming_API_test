import { Stack } from '@mui/system';
import React from 'react';
import P from 'prop-types';
import { useCategory } from '../../utils/GlobalContext';
import {
  Container,
  CustomInputLabel,
  MyMenuItem,
  MySelect,
} from './SelectCategoryStyle';

export const SelectCategory = ({ margin }: { margin?: string }) => {
  const { category, setCategory } = useCategory();

  return (
    <Container margin={margin}>
      <Stack direction="row" alignItems="center">
        <CustomInputLabel>Categoria</CustomInputLabel>
        <MySelect
          label="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MyMenuItem value={''}>Todas</MyMenuItem>
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
