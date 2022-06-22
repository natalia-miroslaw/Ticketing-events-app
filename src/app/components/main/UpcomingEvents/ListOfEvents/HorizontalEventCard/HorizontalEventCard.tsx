import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fromUnixTime, millisecondsToSeconds } from 'date-fns';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Box
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSelectedEvent } from '../../../../../../store/slices/event-slice';
import { EventCardProps } from '../../../../shared/EventsList/EventCard/EventCard';
import { useHorizontalEventCardStyles } from './HorizontalEventCard.styles';

export const HorizontalEventCard: React.FC<EventCardProps> = ({
  eventDate,
  eventPhoto,
  eventTitle,
  eventPlace,
  eventID
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useHorizontalEventCardStyles();

  const clickHandler = (): void => {
    dispatch(setSelectedEvent(eventID));
    navigate(`/event/${eventID}`);
  };
  return (
    <Card
      sx={{ display: 'flex' }}
      className={classes.background}
      onClick={() => clickHandler()}>
      <Box>
        <CardMedia
          component="img"
          image={eventPhoto}
          alt={eventTitle}
          sx={{ height: '100%', width: '180px' }}
        />
      </Box>
      <Box>
        <CardContent className={classes.cardContent}>
          <CardHeader title={eventTitle} className={classes.text} />
          <Typography variant="body2" color="text.secondary">
            {fromUnixTime(millisecondsToSeconds(eventDate)).toLocaleDateString(
              'gb-GB'
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {eventPlace}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
