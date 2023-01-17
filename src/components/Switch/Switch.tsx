import { Switch } from '@mui/material';
import React from 'react';
import P from 'prop-types';

export const MySwitch = ({
  checked,
  onClick,
}: {
  checked: boolean;
  onClick: any;
}) => {
  return (
    <div>
      <Switch checked={checked} onClick={onClick} color="primary" />
    </div>
  );
};

MySwitch.propTypes = {
  checked: P.bool.isRequired,
  onClick: P.any.isRequired,
};
