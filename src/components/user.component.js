import React from 'react';
import PropTypes from 'prop-types';
import { Person } from '@mui/icons-material';
export const User = ({ name }) => {
  return (
    <div className="flex  items-center border rounded-lg px-5 py-2 border-gray-400 w-3/12 m-7  justify-around">
      <Person color="success" sx={{ fontSize: 100, borderRadius: '50%' }} />
      <div> {name}</div>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
};


