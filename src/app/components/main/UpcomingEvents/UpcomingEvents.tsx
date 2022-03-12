import React from 'react';
import { UpcomingEventsContainer } from './UpcomingEvents.styles';
import { EventsList } from '../../shared/EventsList/EventsList';
import { getEvents } from '../../../../store/selectors';

export const UpcomingEvents: React.FC = () => {
  return (
    <UpcomingEventsContainer>
      <h2>Check out upcoming events</h2>
      <EventsList events={getEvents} />
    </UpcomingEventsContainer>
  );
};
