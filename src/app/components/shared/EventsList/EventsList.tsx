import React from 'react';
import { EventCard } from './EventCard/EventCard';
import { EventType } from '../../../types/eventType';
import { Grid } from '@mui/material';

interface EventsListProps {
  events: EventType[];
}

export const EventsList: React.FC<EventsListProps> = ({ events }) => {
  return (
    <Grid container spacing={3} padding={'20px 40px'}>
      {events.map((event, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <EventCard
            key={index}
            eventTitle={event.title}
            eventDate={event.date}
            eventPlace={event.localization.place}
            eventPhoto={event.photoUrl}
            eventID={event.id}
          />
        </Grid>
      ))}
    </Grid>
  );
};
