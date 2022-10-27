import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AccessTime, LocationOn, CalendarMonth } from '@mui/icons-material';
import { Card } from '@mui/material';
import { CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


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
      <Card sx={{ width: '50%', gap: 20 }}>
        <CardMedia
          component="img"
          height="200"
          image={IMAGE_EVENT.image2}
          alt="Tennis Club"
          className="h-40"
        />

        <CardContent>
          <div className=' flex justify-center'>
            <Typography gutterBottom variant="h5" component="div">
              {event.name}
            </Typography>
          </div>
          <Typography height={30} variant="body2" color="text.secondary">
            {event.type}
          </Typography>
          <Typography height={30} variant="body2" color="text.secondary">
            {event.description}
          </Typography>
          <div className="flex flex-wrap  ">
            <div className="flex-1 flex flex-col">
              <div>
                <CalendarMonth />
              </div>
              <div>{event.date}</div>
            </div>
            <div className="flex-1 flex flex-col">
              <div>
                <AccessTime />
              </div>
              <div>{event.time}</div>
            </div>
            <div className="flex-1 flex flex-col">
              <div>
                <LocationOn />
              </div>
              <div>{event.location}</div>
            </div>
          </div>
        </CardContent>
        <CardActions>
            <NavLink>
          <div className='flex justify-center'>
              <Button size="small flex justify-center">
                INVITE USERS
              </Button>
          </div>
            </NavLink>


        </CardActions>
      </Card>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.object,
  isCardInvite: PropTypes.bool,
};
