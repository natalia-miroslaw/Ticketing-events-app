import React, { Fragment } from 'react';
import { UpcomingEventsContainer } from './UpcomingEvents.styles';

export const UpcomingEvents: React.FC = () => {
  return (
    <UpcomingEventsContainer>
      <h2>Check out upcoming events</h2>
      <div className="event-cards-div">
        <div>EventCard</div>
        <div>EventCard</div>
        <div>EventCard</div>
      </div>
    </UpcomingEventsContainer>
  );
};
