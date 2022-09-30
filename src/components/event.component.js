import React from 'react';
import { Card } from '@mui/material';
import { CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import { LogoEvents } from '../assets';
import { Button } from './button.component';

export const Event = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="500"
        image={LogoEvents}
        alt="Tennis Club"
        className="h-60"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outline">
          Share
        </Button>
        <Button size="small" variant="outline">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
