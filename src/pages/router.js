import React from 'react';
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom';
import { Header } from '../components';
import { Lading } from './landing.component';
import { Login } from './login.component';
import { Register } from './register.component';
import { Events } from './events.component';
import { Invites } from './invites.component';
import { EventDetail } from './eventDetail.component';
import { CreateEvent } from './createEvent.component'
import { ROUTES_CONSTANTS } from './routes';


export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path={ROUTES_CONSTANTS.LANDING} element={<Lading />} />
          <Route path={ROUTES_CONSTANTS.LOGIN} element={<Login />} />
          <Route path={ROUTES_CONSTANTS.REGISTER} element={<Register />} />
          <Route path={ROUTES_CONSTANTS.EVENTS} element={<Events />} />
          <Route path={ROUTES_CONSTANTS.INVITES} element={<Invites />} />
          <Route path={ROUTES_CONSTANTS.EVENTDETAIL} element={<EventDetail />} />
          <Route path={ROUTES_CONSTANTS.CREATE} element={<CreateEvent />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
};
