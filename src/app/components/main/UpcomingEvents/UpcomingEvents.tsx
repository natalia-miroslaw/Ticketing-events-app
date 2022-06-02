import React from 'react';
import { useSelector } from 'react-redux';
import { UpcomingEventsContainer } from './UpcomingEvents.styles';
import { EventsList } from '../../shared/EventsList/EventsList';
import { get3EventsSelector } from '../../../../store/selectors';
import { ViewResultsButton } from './ViewResultsButton/ViewResultsButton';

export const UpcomingEvents: React.FC = () => {
  const getEvents = useSelector(get3EventsSelector);

  return (
    <UpcomingEventsContainer>
      <h2>Check out upcoming events</h2>
      <EventsList events={getEvents.slice(0, 3)} />
      <ViewResultsButton />
    </UpcomingEventsContainer>
  );
};
