import React from "react";
import { 
  Route,
  Routes,
  BrowserRouter,
  NavLink,
} from "react-router-dom";
import { Header } from "../components/header.component";
import { Lading } from "./landing.component";
import { Login } from "./login.component";
import { Register } from "./register.component";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header> 

        <Routes>
          <Route path="/" element={<Lading />} />
          <Route path="/login" element={<Login/>} />
          <Route
            path="/register"
            element={<Register/>}
          />
        </Routes>

      </BrowserRouter>
    </div>
  );
};
