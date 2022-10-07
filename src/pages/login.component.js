import React, { useState } from 'react';
import { Button, Input } from '../components';
import { useAuth } from '../hooks';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { ROUTES_CONSTANTS } from './routes';
import { setUserLogin } from '../redux';

export const Login = () => {
  const { loginUser } = useAuth();
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
  });

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handlerSubmit = async () => {
    try {
      const res = await loginUser(user);
      const data = setCookie('keyToken', res);
      console.log(cookies.keyToken);
      setUserLogin(data);
      navigate(ROUTES_CONSTANTS.LANDING);
    } catch (e) {
      console.log(e);
    }
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
