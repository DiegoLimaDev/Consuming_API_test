import React from 'react';
import { MyButton } from './ButtonStyle';
import P from 'prop-types';

export const Button = ({
  children,
  onClick,
}: {
  children: any;
  onClick: any;
}) => {
  return <MyButton onClick={onClick}>{children}</MyButton>;
};

Button.propTypes = {
  children: P.any.isRequired,
  onClick: P.any.isRequired,
};
