import React from 'react';
import PropTypes from 'prop-types';

import { Button as ButtonMaterial } from '@mui/material';

export const Button = ({
  children,
  onClick,
  className,
  variant = 'contained',
  color = 'success',
  size,
}) => {
  return (
    <ButtonMaterial
      variant={variant}
      onClick={onClick}
      className={className}
      color={color}
      size={size}
    >
      {children}
    </ButtonMaterial>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};
