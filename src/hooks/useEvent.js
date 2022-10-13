import { post } from '../api';

export const useEvent = () => {
  const createEvent = async (tennisEvent) => {
    return await post('http://localhost:8080/event', tennisEvent);
  };
  return { createEvent };
};
