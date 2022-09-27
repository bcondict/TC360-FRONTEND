import React from "react";
import { Button, Input } from "../components";

export const Login = () => {
  return (
    <div className="flex justify-center items-center p-12">
      <div className="border flex border-gray-400 rounded-lg p-8 bg-white flex-col h-72 justify-around">
        <h3 className="text-center ">LOGIN</h3>
        <Input   label="Email"  />
        <Button> Sign In</Button>
      </div>
    </div> 
  );
};
