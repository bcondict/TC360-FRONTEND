import { post, get } from '../api';
import { useSelector } from 'react-redux';

export const useEvent = () => {
  const token = useSelector((state) => state.auth.user.token)
  const createEvent = async (tennisEvent) => {
    return await post('http://localhost:8080/event/event', tennisEvent, token);
  };
  const getEvent = async (id) => {
    return await get('http://localhost:8080/event/event/' + id , token)
}
  return { createEvent, getEvent};
};

