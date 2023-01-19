import React from 'react';
import { dataShape } from '../../services/interface';
import P from 'prop-types';
import {
  useCategory,
  useIsDarkMode,
  useIsDrawerVisible,
  useNumberId,
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

export const ProductsMap = ({ data }: { data: dataShape[] }) => {
  const { value, setValue } = useSearchValue();
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();
  const { isDrawerVisible, setIsDrawerVisible } = useIsDrawerVisible();
  const { numberId, setNumberId } = useNumberId();
  const { category, setCategory } = useCategory();

  const filteredData =
    category === 'All'
      ? data.filter((e) => e.title.toLowerCase().includes(value.toLowerCase()))
      : data
          .filter((e) => e.category.toLowerCase() === category.toLowerCase())
          .filter((e) => e.title.toLowerCase().includes(value.toLowerCase()));

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
