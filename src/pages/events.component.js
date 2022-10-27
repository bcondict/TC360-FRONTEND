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
    <div className="   ">
      <div className="flex justify-between  flex-wrap">
        {events.map((event, index) => (
          <Event key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

