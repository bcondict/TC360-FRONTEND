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
import {
  AccessTime,
  LocationOn,
  CalendarMonth,
  Diversity2Sharp,
} from '@mui/icons-material';
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
    <div className="  py-2 w-4/12  p-5 ">
      <Card sx={{ width: '80%', gap: 20 }}>
        <CardMedia
          component="img"
          height="200"
          image={IMAGE_EVENT.image2}
          alt="Tennis Club"
          className="h-40"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.name}
          </Typography>
          <Typography height={30} variant="body2" color="text.secondary">
            {event.type}
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
          {isCardInvite ? (
            <React.Fragment>
              <Button
                size="small"
                className="text-green-600"
                color={
                  event.inviteStatus === INVITE_STATUS.yes
                    ? 'success'
                    : 'inherit'
                }
                variant="contained"
              >
                Yes
              </Button>

              <Button
                size="small"
                variant="contained"
                color={
                  event.inviteStatus === INVITE_STATUS.no
                    ? 'success'
                    : 'inherit'
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
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.object,
  isCardInvite: PropTypes.bool,
};
