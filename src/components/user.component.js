import React from 'react';
import PropTypes from 'prop-types';
import { Person } from '@mui/icons-material';
export const User = ({ name, email }) => {
  return (
    <div className="flex  items-center border rounded-lg px-5 py-2 border-gray-400 m-7  justify-around">
      <Person color="success" sx={{ fontSize: 100, borderRadius: '50%' }} />
      <div className="flex flex-col">
        <div> {name}</div>
        <div> {email}</div>
      </div>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};
