import { get } from '../api';

export const useMembers = () => {
  const getMembers = async () => {
    return await get('http://localhost:8080/members');
  };

  return { getMembers };
};
