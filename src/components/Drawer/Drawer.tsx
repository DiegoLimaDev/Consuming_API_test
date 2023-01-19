import { Container } from '@mui/material';
import React from 'react';
import {
  CustomImage,
  CustomRating,
  MyDrawer,
  RatingContainer,
} from './DrawerStyles';
import P from 'prop-types';
import { Text } from '../Text/Text';
import { useIsDarkMode, useNumberId } from '../../utils/GlobalContext';
import { dataShape } from '../../services/interface';
import { theme } from '../../utils/theme';
import { Stack } from '@mui/system';

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
      <MyDrawer
        anchor="right"
        open={visible}
        elevation={20}
        transitionDuration={200}
        PaperProps={{
          style: {
            width: '30%',
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
        <Text size="big" darkmode={isDarkMode} align="center" margin="2rem 0">
          {`R$${filteredById?.price}`}
        </Text>
        <Text size="medium" darkmode={isDarkMode} align="center">
          {filteredById?.description}
        </Text>
      </MyDrawer>
    </Container>
  );
};

CustomDrawer.propTypes = {
  visible: P.bool.isRequired,
  data: P.array,
};
