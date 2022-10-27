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
    <div className="flex justify-center items-center p-10 ">
      <div  className="border flex border-gray-400 rounded-lg p-14 bg-white flex-col h-auto justify-around space-y-10">
        <div>
          <img
            src={IMAGE_EVENT.image4}
            alt="imagen"
            style={{ height: '200px' }}
          ></img>
        </div>
        <div className="w-200px font-mono text-2xl">{event.name}</div>
        <div className="w-200px text-lg">{event.description}</div>
        <div>
          <div className="flex space-x-12">
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
    </div>
  );
};
