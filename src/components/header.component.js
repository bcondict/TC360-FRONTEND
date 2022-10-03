import React from 'react';
import { Button } from './button.component';
import { NavLink } from 'react-router-dom';
import { LogoTennis } from '../assets';
import { ROUTES_CONSTANTS } from '../pages';

export const Header = () => {
  return (
    <div className="flex items-center bg-white justify-between">
      <div className="flex flex-row justify-start w-36 px-6">
        <img src={LogoTennis} />
      </div>

      <div className="flex-row space-x-3 bg-white px-6">
        <NavLink to={ROUTES_CONSTANTS.LOGIN}>
          <Button variant="outlined">Sign in</Button>
        </NavLink>
        <NavLink to={ROUTES_CONSTANTS.REGISTER}>
          <Button>Register</Button>
        </NavLink>
        <NavLink to={ROUTES_CONSTANTS.LANDING}>
          <Button>Home</Button>
        </NavLink>
        <NavLink to={ROUTES_CONSTANTS.EVENTS}>
          <Button>My events</Button>
        </NavLink>
        <NavLink to={ROUTES_CONSTANTS.INVITES}>
          <Button>My invites</Button>
        </NavLink>
      </div>
    </div>
  );
};
