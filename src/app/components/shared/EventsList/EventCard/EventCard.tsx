import React from 'react';
import { Link } from 'react-router-dom';
import { EventCardContainer } from './EventCard.styles';
import { fromUnixTime, millisecondsToSeconds } from 'date-fns';

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
      <Link to={`/event/${eventID}`}>
        <img src={eventPhoto} alt="img" width="100px" />
        <div>
          <p>
            {fromUnixTime(millisecondsToSeconds(eventDate)).toLocaleDateString(
              'gb-GB'
            )}
            , {eventPlace}
          </p>
        </div>
        <div>
          <p>{eventTitle}</p>
        </div>
      </Link>
    </EventCardContainer>
  );
};
