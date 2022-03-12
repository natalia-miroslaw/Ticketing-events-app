import React from 'react';
import { EventsListContainer } from './EventsList.styles';
import { EventCard } from './EventCard/EventCard';
import { EventType } from '../../../types/eventType';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../../../store/slices/types';

interface EventsListProps {
  events: EventType[];
}

export const EventsList: React.FC<EventsListProps> = ({ events }) => {
  // const eventTitle = useSelector((state: RootState) => state.eventState.event);
  // const eventDate = useSelector((state: RootState) => state.eventState.event);
  // const eventPlace = useSelector((state: RootState) => state.eventState.event);
  // const eventPhoto = useSelector((state: RootState) => state.eventState.event);
  // const eventId = useSelector((state: RootState) => state.eventState.event);

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
