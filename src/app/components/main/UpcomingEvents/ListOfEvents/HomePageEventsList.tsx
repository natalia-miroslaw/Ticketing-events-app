import React from 'react';
import { Grid } from '@mui/material';
import { HorizontalEventCard } from './HorizontalEventCard/HorizontalEventCard';
import { EventsListProps } from '../../../shared/EventsList/EventsList';

export const HPEventsList: React.FC<EventsListProps> = ({ events }) => {
  return (
    <Grid flexDirection="column" container spacing={2} padding={'10px 20px'}>
      {events.map((event, index) => (
        <Grid item xs={12} key={index}>
          <HorizontalEventCard
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
