import React from 'react';
import PropTypes from 'prop-types';

import { Button as ButtonMaterial } from '@mui/material';

export const Button = ({ children, onClick, className }) => {
    return <ButtonMaterial  variant="contained" onClick={onClick} className={className}> {children}</ButtonMaterial>
}


Button.propTypes = {
    children: PropTypes.element,
    onClick: PropTypes.func,
    className: PropTypes.string,
};