import React from 'react';
import { EventsListContainer } from './EventsList.styles';
import { EventCard } from './EventCard/EventCard';
import { EventType } from '../../../types/eventType';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/slices/types';

interface EventsListProps {
  events: EventType[];
}

export const EventsList: React.FC<EventsListProps> = ({ events }) => {
  const eventTitle = useSelector(
    (state: RootState) => state.eventState.event.title
  );
  const eventDate = useSelector(
    (state: RootState) => state.eventState.event.date
  );
  const eventPlace = useSelector(
    (state: RootState) => state.eventState.event.localization.place
  );
  const eventPhoto = useSelector(
    (state: RootState) => state.eventState.event.photoUrl
  );
  const eventId = useSelector((state: RootState) => state.eventState.event.id);

  return (
    <EventsListContainer>
      {events.map((event) => (
        <EventCard
          eventTitle={event.title}
          eventDate={event.date}
          eventPlace={event.localization.place}
          eventPhoto={event.photoUrl}
          eventID={event.id}
        />
      ))}
    </EventsListContainer>
  );
};
