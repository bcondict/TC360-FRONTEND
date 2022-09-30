import { post } from '../api';

export const useAuth = () => {
  const createUser = async (user) => {
    return await post('http://localhost:8080/auth/register', user);
  };
  const loginUser = async (user) => {
    return await post('http://localhost:8080/auth/login', user);
  };
  return { createUser, loginUser };
};
