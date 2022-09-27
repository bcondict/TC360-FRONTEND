import React from "react";
import { 
  Route,
  Routes,
  BrowserRouter,
  NavLink,
} from "react-router-dom";
import { Lading } from "./landing.component";
import { Login } from "./login.component";
import { Register } from "./register.component";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>

        <NavLink to={"/login"}>sign in</NavLink>

        <NavLink className={"bg-violet-800"} to={"/register"}>
          go to register
        </NavLink>

        <NavLink className={"bg-violet-500"} to={"/"}>
          go to landing
        </NavLink>

        <Routes>
          <Route path="/" element={<Lading />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={<Register/>}
          />
        </Routes>

      </BrowserRouter>
    </div>
  );
};
