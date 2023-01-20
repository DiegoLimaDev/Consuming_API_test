import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React from 'react';
import {
  CustomImage,
  CustomRating,
  DialogBox,
  RatingContainer,
} from './DrawerStyles';
import P from 'prop-types';
import { Text } from '../Text/Text';
import {
  useIsDarkMode,
  useIsDrawerVisible,
  useNumberId,
} from '../../utils/GlobalContext';
import { dataShape } from '../../utils/interface';
import { Stack } from '@mui/system';
import { getDecimals } from '../../utils/getDecimalsNumbers';
import { Button } from '../Button/Button';
import { Transition } from '../../utils/TransitionConfig';

export const CustomDrawer = ({ data }: { data: dataShape[] }) => {
  const { numberId, setNumberId } = useNumberId();
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();
  const { isDrawerVisible, setIsDrawerVisible } = useIsDrawerVisible();

  const filteredById = data.find((e) => e.id === numberId);

  return (
    <Container role="presentation">
      <Dialog
        open={isDrawerVisible}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setIsDrawerVisible(false)}
      >
        <DialogBox darkmode={isDarkMode}>
          <DialogTitle>
            <Text size="big" darkmode={isDarkMode} weight="800">
              {filteredById?.title}
            </Text>
          </DialogTitle>
          <DialogContent>
            <CustomImage
              src={filteredById?.image}
              height={250}
              width={250}
              alt={filteredById?.title}
            />
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Text size="medium" darkmode={isDarkMode} align="right">
                {`Categoria: ${filteredById?.category}`}
              </Text>
              <Text
                size="medium"
                darkmode={isDarkMode}
                align="left"
              >{`Estoque: ${filteredById?.rating.count}`}</Text>
            </Stack>
            <RatingContainer>
              <CustomRating
                readOnly
                value={Number(filteredById?.rating.rate)}
                sx={{ fontSize: '10rem' }}
              />
            </RatingContainer>
            <Text
              size="big"
              darkmode={isDarkMode}
              align="center"
              margin="1rem 0"
            >
              {`R$${getDecimals(Number(filteredById?.price))}`}
            </Text>
            <Text size="medium" darkmode={isDarkMode} align="center">
              {filteredById?.description}
            </Text>
            <DialogActions>
              <Button onClick={() => setIsDrawerVisible(false)}>
                <Text size="medium2" darkmode={isDarkMode}>
                  Fechar
                </Text>
              </Button>
            </DialogActions>
          </DialogContent>
        </DialogBox>
      </Dialog>
    </Container>
  );
};

CustomDrawer.propTypes = {
  data: P.array.isRequired,
};
