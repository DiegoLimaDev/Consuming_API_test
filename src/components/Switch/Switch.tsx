import { Switch } from '@mui/material';
import React from 'react';
import P from 'prop-types';
import { Container } from './SwitchStyle';

export const MySwitch = ({
  checked,
  onClick,
}: {
  checked: boolean;
  onClick: any;
}) => {
  return (
    <Container>
      <Switch checked={checked} onClick={onClick} color="primary" />
    </Container>
  );
};

MySwitch.propTypes = {
  checked: P.bool.isRequired,
  onClick: P.any.isRequired,
};
