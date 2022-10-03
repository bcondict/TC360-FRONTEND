import React from 'react';

import {
  LogoEvents,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from '../assets';
import { Button } from './button.component';
import { AccessTime, LocationOn, CalendarMonth } from '@mui/icons-material';

const IMAGE_EVENT = {
  image1: LogoEvents,
  image2: Image2,
  image3: Image3,
  image4: Image4,
  image5: Image5,
  image6: Image6,
  image7: Image7,
};

export const EventDetail = (event) => {
  return (
    <div>
      <div>
        {event.name}
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

      <div>Invite users</div>
    </div>
  );
};
