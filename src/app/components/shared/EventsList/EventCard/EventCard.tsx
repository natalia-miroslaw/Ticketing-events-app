import React from 'react';
import { Link } from 'react-router-dom';
import { useEventCardStyles } from './EventCard.styles';
import { fromUnixTime, millisecondsToSeconds } from 'date-fns';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material';

interface EventCardProps {
  eventTitle: string;
  eventDate: number;
  eventPlace: string;
  eventPhoto: string | undefined;
  eventID: number;
}

export const EventCard: React.FC<EventCardProps> = ({
  eventDate,
  eventPhoto,
  eventTitle,
  eventPlace,
  eventID
}) => {
  const classes = useEventCardStyles();
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.background}>
      <Link to={`/event/${eventID}`}>
        <CardMedia
          component="img"
          height="194"
          image={eventPhoto}
          alt={eventTitle}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {fromUnixTime(millisecondsToSeconds(eventDate)).toLocaleDateString(
              'gb-GB'
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {eventPlace}
          </Typography>
          <CardHeader title={eventTitle} />
        </CardContent>
      </Link>
    </Card>
  );
};
