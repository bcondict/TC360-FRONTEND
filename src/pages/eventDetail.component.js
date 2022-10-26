import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AccessTime, LocationOn, CalendarMonth } from '@mui/icons-material';

import { Button } from '../components';
import { useEvent } from '../hooks'
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


  useEffect(()=> {
    const fn = async()=> {
      setEvent(await getEvent(eventId));
    }
    fn();
  }, []);


  return (
    <div>
      <div>
        {event.name}
      </div>
      <div>
        {event.description}
      </div>
      <div>
        <div>
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
