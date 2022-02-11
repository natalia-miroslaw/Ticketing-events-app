import React from 'react';
import { EventsListContainer } from './EventsList.styles';
import { EventCard } from './EventCard/EventCard';
import { EventType } from '../../../types/eventType';

interface EventsListProps {
  events: EventType[];
}

export const EventsList: React.FC<EventsListProps> = ({ events }) => {
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
