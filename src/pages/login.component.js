import React, { useState } from 'react';
import { Button, Input } from '../components';

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
  });

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handlerSubmit = () => {
    console.log(user);
  };

  return (
    <div className="flex justify-center items-center p-12">
      <div className="border flex border-gray-400 rounded-lg p-8 bg-white flex-col h-72 justify-around">
        <h3 className="text-center ">LOGIN</h3>
        <Input label="Email" name="email" onChange={onChange} />
        <Button onClick={handlerSubmit}> Sign In</Button>
      </div>
    </div>
  );
};
