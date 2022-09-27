import React from "react";
import { Button } from "./button.component";
import { NavLink } from "react-router-dom";
import  {LogoTennis}  from "../assets"

export const Header = () => {
    return (
        <div className="flex justify-end items-center bg-white">

            <div>
                
            </div>
            <div className="p-3 flex-row space-x-3 bg-white">
                <img  src = {LogoTennis}/>
                <NavLink to={'/login'}>
                    <Button>Sign in</Button>
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

