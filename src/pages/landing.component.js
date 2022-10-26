import React, { useEffect, useState } from 'react';
import { User } from '../components/user.component';
import { useMembers } from '../hooks';

export const Lading = () => {
  const [members, setMembers] = useState([]);

  const { getMembers } = useMembers();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMembers();
      setMembers(response);
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col p-12">
      <div className="flex justify-center items-center text-justify text-3xl font-medium text-blue-900 rounded-lg flex-col mb-8 w-1/4 p-3">
        <h1>MEMBER DIRECTORY</h1>
      </div>

      <div className="flex justify-center text-justify flex-wrap">
        {members.map(({ email, nickname }, index) => (
          <User key={index} name={nickname} email={email}></User>
        ))}
      </div>
    </div>
  );
};

