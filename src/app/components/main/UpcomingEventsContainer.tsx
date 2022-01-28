import React, { Fragment } from 'react';
import { EventCard } from './EventCard';

export const UpcomingEventsContainer: React.FC = () => {
  return (
    <Fragment>
      <h2>Check out upcoming events</h2>
      <EventCard>EventCard</EventCard>
      <EventCard>EventCard</EventCard>
      <EventCard>EventCard</EventCard>
    </Fragment>
  );
};
