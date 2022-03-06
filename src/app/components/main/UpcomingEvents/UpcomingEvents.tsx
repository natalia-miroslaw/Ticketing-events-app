import React from 'react';
import { UpcomingEventsContainer } from './UpcomingEvents.styles';
import { EventsList } from '../../shared/EventsList/EventsList';
// import { DUMMY_DATA } from '../../mock';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/slices/types';

export const UpcomingEvents: React.FC = () => {
  const showedEvents = useSelector(
    (state: RootState) => state.eventState.event
  );

  return (
    <UpcomingEventsContainer>
      <h2>Check out upcoming events</h2>
      <EventsList events={showedEvents} />
    </UpcomingEventsContainer>
  );
};
