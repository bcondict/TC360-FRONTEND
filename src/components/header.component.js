import React from 'react';
import { Button } from './button.component';
import { NavLink } from 'react-router-dom';
import { LogoTennis } from '../assets';

export const Header = () => {
  return (
    <div className="flex items-center bg-white justify-between">
      <div className="flex flex-row justify-start w-36 px-6">
        <img src={LogoTennis} />
      </div>

      <div className="flex-row space-x-3 bg-white px-6">
        <NavLink to={'/login'}>
          <Button variant="outlined">Sign in</Button>
        </NavLink>
        <NavLink to={'/Register'}>
          <Button>Register</Button>
        </NavLink>
        <NavLink to={'/'}>
          <Button>Home</Button>
        </NavLink>
      </div>
    </div>
  );
};
