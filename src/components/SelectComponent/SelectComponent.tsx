import { Stack } from '@mui/system';
import React from 'react';
import P from 'prop-types';
import { useIsDarkMode } from '../../utils/GlobalContext';
import {
  Container,
  CustomInputLabel,
  MyMenuItem,
  MySelect,
} from './SelectComponentStyle';
import { Text } from '../Text/Text';

export const SelectComponent = ({
  margin,
  selectData,
  title,
  value,
  setValue,
}: {
  margin?: string;
  title: string;
  selectData: any[];
  value: string;
  setValue: any;
}) => {
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();

  return (
    <Container margin={margin}>
      <Stack direction="row" alignItems="center">
        <CustomInputLabel>
          <Text size="big" darkmode={isDarkMode}>
            {title}
          </Text>
        </CustomInputLabel>
        <MySelect
          label="Categoria"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {selectData.map((e, i) => (
            <MyMenuItem key={i} value={e.value}>
              {e.label}
            </MyMenuItem>
          ))}
        </MySelect>
      </Stack>
    </Container>
  );
};

SelectComponent.propTypes = {
  margin: P.string,
  selectData: P.arrayOf(P.shape({ value: P.string, label: P.string }))
    .isRequired,
  title: P.string.isRequired,
  value: P.string.isRequired,
  setValue: P.any.isRequired,
};
