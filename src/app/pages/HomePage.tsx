import React from 'react';
import { SearchForEvents } from '../components/main/SearchForEvents/SearchForEvents';
import { UpcomingEvents } from '../components/main/UpcomingEvents/UpcomingEvents';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <SearchForEvents />
      <UpcomingEvents />
      <div>img</div>
    </HomePageContainer>
  );
};

export default HomePage; //lazy loading importuje component default'owo
