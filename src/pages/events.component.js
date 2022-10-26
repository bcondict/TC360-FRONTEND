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
    <div className="flex flex-wrap">
      {events.map(( {name, description, coordinator, type, date, time, location, guests }, index) => (
        <div key={index} className=" w-1/3 p-5 flex justify-center">
          <Event name={name} description={description} coordinator={coordinator} type={type} date={date} time={time} location={location} guests={guests} />
        </div>
      ))}
    </div>
  );
};

