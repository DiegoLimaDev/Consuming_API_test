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
  ButtonContainer,
  Container,
  CustomImage,
  Item,
  MyGrid,
  NotFoundContainer,
} from './ProductsMapsStyle';
import { Grid, Stack } from '@mui/material';
import { CustomDrawer } from '../Drawer/Drawer';
import { Button } from '../Button/Button';

export const ProductsMap = ({ data }: { data: dataShape[] }) => {
  const { value, setValue } = useSearchValue();
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();
  const { isDrawerVisible, setIsDrawerVisible } = useIsDrawerVisible();
  const { numberId, setNumberId } = useNumberId();
  const { category, setCategory } = useCategory();

  const filteredData = data
    .filter((e) => e.category.toLowerCase().includes(category.toLowerCase()))
    .filter((e) => e.title.toLowerCase().includes(value.toLowerCase()));

  return (
    <Container
      onClick={() =>
        isDrawerVisible ? setIsDrawerVisible(!isDrawerVisible) : null
      }
    >
      {filteredData.length === 0 ? (
        <NotFoundContainer>
          <Text size="title" darkmode={isDarkMode}>
            Dados não encontrados
          </Text>
        </NotFoundContainer>
      ) : (
        <Grid container rowSpacing={1} columnSpacing={5}>
          {filteredData.map((e) => (
            <MyGrid item xs={4} md={2} key={e.id} darkmode={isDarkMode}>
              <Item>
                <CustomImage src={e.image} height="200" width="200" />
                <Text
                  size="medium2"
                  darkmode="light"
                  align="center"
                  margin="2rem 0 0 0"
                >
                  {`${e.title.substring(0, 30)}...  `}
                </Text>
                <Text size="medium2" darkmode="light" align="center">
                  {`R$${e.price}`}
                </Text>
                <Stack direction="row">
                  <ButtonContainer>
                    <Button
                      onClick={() => {
                        setIsDrawerVisible(!isDrawerVisible);
                        setNumberId(e.id);
                      }}
                    >
                      Ver informações
                    </Button>
                  </ButtonContainer>
                </Stack>
              </Item>
            </MyGrid>
          ))}
          <CustomDrawer visible={isDrawerVisible} data={data} />
        </Grid>
      )}
    </Container>
  );
};

ProductsMap.propTypes = {
  data: P.array.isRequired,
};
