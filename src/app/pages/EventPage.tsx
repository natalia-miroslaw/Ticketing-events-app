import React from 'react';
import styled from 'styled-components';
import { EventType } from '../types/eventType';

const EventPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventPage: React.FC<EventType> = (event) => {
  return (
    <EventPageContainer>
      <h2>{`{getEvent.title}`}</h2>
      <h3>hello</h3>
    </EventPageContainer>
  );
};

export default EventPage;
