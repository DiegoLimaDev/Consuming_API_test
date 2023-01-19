import { Grid, Stack } from '@mui/material';
import React from 'react';
import { dataShape } from '../../services/interface';
import P from 'prop-types';
import {
  ButtonContainer,
  CustomImage,
  Item,
  MyGrid,
} from './GridComponentStyle';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { CustomDrawer } from '../Drawer/Drawer';
import {
  useIsDarkMode,
  useIsDrawerVisible,
  useNumberId,
} from '../../utils/GlobalContext';

export const GridComponent = ({ data }: { data: dataShape[] }) => {
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();
  const { isDrawerVisible, setIsDrawerVisible } = useIsDrawerVisible();
  const { numberId, setNumberId } = useNumberId();

  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={5}
      spacing={{ xs: 'auto', md: 'auto' }}
      columns={{ xs: 2, sm: 8, md: 12 }}
    >
      {data.map((e) => (
        <MyGrid item xs={2} sm={3} md={2.5} key={e.id} darkmode={isDarkMode}>
          <Item darkmode={isDarkMode}>
            <CustomImage src={e.image} height="200" width="200" alt={e.title} />
            <Text
              size="medium2"
              darkmode={isDarkMode}
              align="center"
              margin="2rem 0 0 0"
            >
              {`${e.title.substring(0, 30)}...  `}
            </Text>
            <Text size="medium2" darkmode={isDarkMode} align="center">
              {`R$${e.price}`}
            </Text>
            <Stack
              direction="row"
              sx={{
                position: 'absolute',
                bottom: '5rem',
                right: '20%',
                left: '30%',
              }}
            >
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
  );
};

GridComponent.propTypes = {
  data: P.array,
};
