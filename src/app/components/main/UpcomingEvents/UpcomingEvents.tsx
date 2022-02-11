import React from 'react';
import { UpcomingEventsContainer } from './UpcomingEvents.styles';
import { EventsList } from '../../shared/EventsList/EventsList';
import { DUMMY_DATA } from '../../mock';

export const UpcomingEvents: React.FC = () => {
  return (
    <UpcomingEventsContainer>
      <h2>Check out upcoming events</h2>
      <EventsList events={DUMMY_DATA} />
    </UpcomingEventsContainer>
  );
};
