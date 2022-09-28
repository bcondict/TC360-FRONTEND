import React from 'react';
import { User } from '../components/user.component';

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

export const Lading = () => {
  return (
    <div className="flex justify-center items-center flex-col p-12">
      <div className="flex justify-center items-center text-justify text-3xl font-medium text-blue-900 rounded-lg flex-col mb-8 w-1/4 p-3">
        <h1>MEMBER DIRECTORY</h1>
      </div>

      <div className="flex justify-center text-justify flex-wrap">
        {users.map(({ name }, index) => (
          <User key={index} name={name}></User>
        ))}
      </div>
    </div>
  );
};
