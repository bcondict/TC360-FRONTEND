import React from 'react';
import { Card } from '@mui/material';
import { CardMedia, CardContent, Typography, CardActions } from '@mui/material';
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
import PropTypes from 'prop-types';
import { INVITE_STATUS } from '../constants/inviteStatus.constant';
import { NavLink } from 'react-router-dom';
import { ROUTES_CONSTANTS } from '../pages';


const IMAGE_EVENT = {
  image1: LogoEvents,
  image2: Image2,
  image3: Image3,
  image4: Image4,
  image5: Image5,
  image6: Image6,
  image7: Image7,
};

export const Event = ({ isCardInvite, event }) => {
  return (
    <div className='flex px-5 py-2 w-3/12 m-7 justify-around '>
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="500"
        image={IMAGE_EVENT.image2}
        alt="Tennis Club"
        className="h-60"
      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.name}
          </Typography>
          <Typography height={70} variant="body2" color="text.secondary">
            {event.description}
          </Typography>
          <Typography height={70} variant="body2" color="text.secondary">
            {event.coordinator}
          </Typography>
          <Typography height={70} variant="body2" color="text.secondary">
            {event.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>
              <CalendarMonth /> {event.date}
            </div>
            <div>
              <AccessTime /> {event.time}
            </div>
            <div className="h-11">
              <LocationOn /> {event.location}
            </div>
          </Typography>
          <Typography height={50} variant="body2" color="text.secondary">
            {event.guests}
          </Typography>
        </CardContent>
        <CardActions>
          {isCardInvite ? (
            <React.Fragment>
              <Button
                size="small"
                className="text-green-600"
                color={
                  event.inviteStatus === INVITE_STATUS.yes ? 'success' : 'inherit'
                }
                variant="contained"
              >
                Yes
              </Button>

              <Button
                size="small"
                variant="contained"
                color={
                  event.inviteStatus === INVITE_STATUS.no ? 'success' : 'inherit'
                }
              >
                No
              </Button>

              <Button
                size="small"
                variant="contained"
                color={
                  event.inviteStatus === INVITE_STATUS.maybe
                    ? 'success'
                    : 'inherit'
                }
              >
                Maybe
              </Button>
            </React.Fragment>
          ) : (
            <NavLink to={ROUTES_CONSTANTS.EVENTDETAIL(event._id)}>
              <Button size="small" variant="text">
                Detail
              </Button>

            </NavLink>
          )}
        </CardActions>
    </Card>
    </div >
  );
};

Event.propTypes = {
  event: PropTypes.object,
  isCardInvite: PropTypes.bool,
};
