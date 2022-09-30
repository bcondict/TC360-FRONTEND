import { get } from '../api';

const users = [
  { name: 'Emmanuel' },
  { name: 'Michael' },
  { name: 'Daniel' },
  { name: 'John' },
  { name: 'John' },
  { name: 'John' },
  { name: 'John' },
  { name: 'John' },
  { name: 'John' },
  { name: 'John' },
  { name: 'John' },
  { name: 'John' },
];

export const useMembers = () => {
  const getMembers = async () => {
    return await Promise.resolve(users);
  };

  return { getMembers };
};
