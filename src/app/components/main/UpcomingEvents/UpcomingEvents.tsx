import React from 'react';
import { useSelector } from 'react-redux';
import { UpcomingEventsContainer } from './UpcomingEvents.styles';
import { eventsSelectors } from '../../../../store/selectors';
import { ViewResultsButton } from './ViewResultsButton/ViewResultsButton';
import { HPEventsList } from './ListOfEvents/HomePageEventsList';

export const UpcomingEvents: React.FC = () => {
  const getEvents = useSelector(eventsSelectors.get4Events);

  return (
    <UpcomingEventsContainer>
      <HPEventsList events={getEvents} />
      <ViewResultsButton />
    </UpcomingEventsContainer>
  );
};
