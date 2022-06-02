import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEventCardStyles } from './EventCard.styles';
import { fromUnixTime, millisecondsToSeconds } from 'date-fns';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSelectedEvent } from '../../../../../store/slices/event-slice';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useEventCardStyles();

  const clickHandler = (): void => {
    dispatch(setSelectedEvent(eventID));
    navigate(`/event/${eventID}`);
  };
  return (
    <Card className={classes.background} onClick={() => clickHandler()}>
      <CardMedia
        component="img"
        height="194"
        image={eventPhoto}
        alt={eventTitle}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          className={classes.text}>
          {fromUnixTime(millisecondsToSeconds(eventDate)).toLocaleDateString(
            'gb-GB'
          )}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {eventPlace}
        </Typography>
        <CardHeader title={eventTitle} className={classes.text} />
      </CardContent>
    </Card>
  );
};
