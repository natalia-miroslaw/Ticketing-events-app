import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getSelectedEventSelector } from '../../store/selectors';
import { EventType } from '../types/eventType';

const EventPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventPage: React.FC<EventType> = () => {
  const eventDetails = useSelector(getSelectedEventSelector);

  return (
    <EventPageContainer>
      <h2>{`${eventDetails?.title}`}</h2>
      <h3>hello</h3>
    </EventPageContainer>
  );
};

export default EventPage;
