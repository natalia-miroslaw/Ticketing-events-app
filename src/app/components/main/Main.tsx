import React from 'react';

import crowdImage from '../../../assets/images/crowd.jpg';
import { SearchForEventsContainer } from './SearchForEventsContainer';
import { UpcomingEventsContainer } from './UpcomingEventsContainer';

export const Main: React.FC = () => {
  return (
    <main>
      <SearchForEventsContainer>
        div with map and inputs
      </SearchForEventsContainer>
      <UpcomingEventsContainer>
        div with upcoming events
      </UpcomingEventsContainer>
      <div>
        <img
          src={crowdImage}
          alt="Crowd and lights at the concert"
          width="800px"
        />
      </div>
    </main>
  );
};
