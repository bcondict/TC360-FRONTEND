import React, { useEffect, useState } from 'react';
import { Event } from '../components';
import { useShowEvent } from '../hooks'

export const Events = () => {
  const [events, setEvents] = useState([]);

  const { getEvents } = useShowEvent();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getEvents();
      setEvents(response);
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col p-12 ">
      <div className="flex justify-center text-justify flex-wrap space-x-8">
        {events.map((event, index) => (
          <Event key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

