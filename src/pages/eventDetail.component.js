import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AccessTime, LocationOn, CalendarMonth } from '@mui/icons-material';

import { Button } from '../components';
import { useEvent } from '../hooks';
import {
  LogoEvents,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from '../assets';

const IMAGE_EVENT = {
  image1: LogoEvents,
  image2: Image2,
  image3: Image3,
  image4: Image4,
  image5: Image5,
  image6: Image6,
  image7: Image7,
};

export const EventDetail = () => {
  const [event, setEvent] = useState([]);
  const { getEvent } = useEvent();

  const { eventId } = useParams();

  useEffect(() => {
    const fn = async () => {
      setEvent(await getEvent(eventId));
    };
    fn();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col p-12 mx-40 mt-10 bg-white space-y-16 border-4 border-[grey]">
      <div>
        <img
          src={IMAGE_EVENT.image4}
          alt="imagen"
          style={{ height: '500px' }}
        ></img>
      </div>
      <div className="w-full font-mono text-2xl font-bold">{event.name}</div>
      <div className="w-full text-lg">{event.description}</div>
      <div>
        <div className="flex space-x-32">
          <div>
            <CalendarMonth />
            {event.date}
          </div>
          <div>
            <AccessTime /> {event.time}
          </div>

          <div>
            <LocationOn /> {event.location}
          </div>
        </div>
        <div>
          <img src={IMAGE_EVENT[event.image]} />
        </div>
      </div>
      <Button>Invite users</Button>
    </div>
  );
};
