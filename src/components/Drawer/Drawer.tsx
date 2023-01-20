import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@mui/material';
import React from 'react';
import {
  CustomImage,
  CustomRating,
  DialogBox,
  MyDrawer,
  RatingContainer,
} from './DrawerStyles';
import P from 'prop-types';
import { Text } from '../Text/Text';
import { useIsDarkMode, useNumberId } from '../../utils/GlobalContext';
import { dataShape } from '../../services/interface';
import { Stack } from '@mui/system';
import { getDecimals } from '../../services/getDecimalsNumbers';
import { TransitionProps } from '@mui/material/transitions';
import { Button } from '../Button/Button';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const CustomDrawer = ({
  visible,
  data,
}: {
  visible: boolean;
  data: dataShape[];
}) => {
  const { numberId, setNumberId } = useNumberId();
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();

  const filteredById = data.find((e) => e.id === numberId);

  return (
    <Container role="presentation">
      {/* <MyDrawer
        anchor="right"
        open={visible}
        elevation={20}
        transitionDuration={200}
        PaperProps={{
          style: {
            width: '25rem',
            backgroundColor:
              isDarkMode === 'light'
                ? theme.colors.iceWhite
                : theme.colors.black,
            padding: '3rem',
          },
        }}
      >
        <CustomImage
          src={filteredById?.image}
          height={250}
          width={250}
          alt={filteredById?.title}
        />
        <Text size="medium2" darkmode={isDarkMode} align="center">
          {filteredById?.title}
        </Text>
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
        <Text size="big" darkmode={isDarkMode} align="center" margin="1rem 0">
          {`R$${getDecimals(Number(filteredById?.price))}`}
        </Text>
        <Text size="medium" darkmode={isDarkMode} align="center">
          {filteredById?.description}
        </Text>
      </MyDrawer> */}
      <Dialog
        open={visible}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => !visible}
      >
        <DialogBox darkmode={isDarkMode}>
          <DialogTitle>
            <Text size="big" darkmode={isDarkMode}>
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
            <Text size="medium2" darkmode={isDarkMode} align="center">
              {filteredById?.title}
            </Text>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={() => !visible}>
              <Text size="medium2" darkmode={isDarkMode}>
                Fechar
              </Text>
            </Button>
          </DialogActions>
        </DialogBox>
      </Dialog>
    </Container>
  );
};

CustomDrawer.propTypes = {
  visible: P.bool.isRequired,
  data: P.array,
};
