import React from 'react';
import { dataShape } from '../../services/interface';
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
import { SelectCategory } from '../SelectCategory/SelectCategory';
import { SearchInput } from '../SearchInput/SearchInput';
import { SelectOrder } from '../SelectOrder/SelectOrder';
import { filterService } from '../../services/filter';

export const ProductsMap = ({ data }: { data: dataShape[] }) => {
  const { value, setValue } = useSearchValue();
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();
  const { isDrawerVisible, setIsDrawerVisible } = useIsDrawerVisible();
  const { numberId, setNumberId } = useNumberId();
  const { category, setCategory } = useCategory();
  const { orderBy, setOrderBy } = useOrderBy();

  const filteredData = filterService(data, orderBy, category, value);

  return (
    <Container
      onClick={() =>
        isDrawerVisible ? setIsDrawerVisible(!isDrawerVisible) : null
      }
    >
      <SearchContainer>
        <MyCustomStack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <SelectCategory />
          <CustomSeparator />
          <SearchInput />
          <CustomSeparator />
          <SelectOrder />
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
