import React from 'react';
import { dataShape } from '../../utils/interface';
import P from 'prop-types';
import {
  useCategory,
  useIsDarkMode,
  useIsDrawerVisible,
  useNumberId,
  useOrderBy,
  useSearchValue,
} from '../../utils/GlobalContext';
import { Text } from '../Text/Text';
import {
  Container,
  CustomSeparator,
  MyCustomStack,
  NotFoundContainer,
  SearchContainer,
} from './ProductsMapsStyle';
import { GridComponent } from '../GridComponent/GridComponent';
import { SelectComponent } from '../SelectComponent/SelectComponent';
import { SearchInput } from '../SearchInput/SearchInput';
import { filterService } from '../../utils/filter';
import { selectCategory, selectOrder } from '../../utils/selectArraysData';

export const ProductsMap = ({ data }: { data: dataShape[] }) => {
  const { value, setValue } = useSearchValue();
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();
  const { isDrawerVisible, setIsDrawerVisible } = useIsDrawerVisible();
  const { numberId, setNumberId } = useNumberId();
  const { category, setCategory } = useCategory();
  const { orderBy, setOrderBy } = useOrderBy();

  const filteredData = filterService(data, orderBy, category, value);

  return (
    <Container>
      <SearchContainer>
        <MyCustomStack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <SelectComponent
            selectData={selectCategory}
            title="Categoria"
            value={category}
            setValue={(e: any) => setCategory(e)}
          />
          <CustomSeparator />
          <SearchInput />
          <CustomSeparator />
          <SelectComponent
            selectData={selectOrder}
            title="Ordem"
            value={orderBy}
            setValue={(e: any) => setOrderBy(e)}
          />
        </MyCustomStack>
      </SearchContainer>
      {filteredData.length === 0 ? (
        <NotFoundContainer>
          <Text size="big" darkmode={isDarkMode}>
            Não há correspondências para sua busca
          </Text>
        </NotFoundContainer>
      ) : (
        <GridComponent data={filteredData} />
      )}
    </Container>
  );
};

ProductsMap.propTypes = {
  data: P.array.isRequired,
};
