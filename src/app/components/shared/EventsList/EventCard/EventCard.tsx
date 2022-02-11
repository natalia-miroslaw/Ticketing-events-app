import React from 'react';
import { Link } from 'react-router-dom';
import { EventCardContainer } from './EventCard.styles';

interface EventCardProps {
  eventTitle: string;
  eventDate: number;
  eventPlace: string;
  eventPhoto: string | undefined;
  eventID: number;
}

export const EventCard: React.FC<EventCardProps> = ({
  eventDate,
  eventPhoto,
  eventTitle,
  eventPlace,
  eventID
}) => {
  return (
    <EventCardContainer>
      <Link to={`/${eventID}`}>
        <img src={eventPhoto} alt="img" width="100px" />
        <div>
          <p>
            {eventDate}, {eventPlace}
          </p>
        </div>
        <div>
          <p>{eventTitle}</p>
        </div>
      </Link>
    </EventCardContainer>
  );
};
