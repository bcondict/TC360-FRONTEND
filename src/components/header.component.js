import React from 'react';
import { Button } from './button.component';
import { NavLink } from 'react-router-dom';
import { LogoTennis } from '../assets';
import { ROUTES_CONSTANTS } from '../pages';
import { useSelector } from 'react-redux'
import { logOut } from '../redux'


export const Header = () => {
  const token = useSelector((state) => state.auth.user.token
  )
  return (
    <div className="flex items-center bg-white justify-between">
      <div className="flex flex-row justify-start w-36 px-6">
        <img src={LogoTennis} />
      </div>

      <div className="flex-row space-x-3 bg-white px-6">
        {token ? (
          <React.Fragment>
            <NavLink to={ROUTES_CONSTANTS.LANDING}>
              <Button>Home</Button>
            </NavLink>
            <NavLink to={ROUTES_CONSTANTS.EVENTS}>
              <Button>My events</Button>
            </NavLink>
            <NavLink to={ROUTES_CONSTANTS.INVITES}>
              <Button>My invites</Button>
            </NavLink>
            <NavLink to={ROUTES_CONSTANTS.CREATE}>
              <Button>Create Event</Button>
            </NavLink>
            <NavLink to={ROUTES_CONSTANTS.LOGIN}>
            <Button variant='outlined'>Log out</Button>
            </NavLink>

          </React.Fragment>
        ) : (
          <React.Fragment><NavLink to={ROUTES_CONSTANTS.LOGIN}>
            <Button variant="outlined" onClick={logOut}>Sign in</Button>
          </NavLink>
            <NavLink to={ROUTES_CONSTANTS.REGISTER}>
              <Button>Register</Button>
            </NavLink>
          </React.Fragment>
        )
        }
      </div>
    </div>
  );
};

