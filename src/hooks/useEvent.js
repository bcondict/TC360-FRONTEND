import { post } from '../api';
import { useSelector } from 'react-redux';


export const useEvent = () => {
  const token = useSelector((state) => state.auth.user.token)
  const createEvent = async (tennisEvent) => {
    return await post('http://localhost:8080/event/event', tennisEvent, token);
  };
  return { createEvent };
};
