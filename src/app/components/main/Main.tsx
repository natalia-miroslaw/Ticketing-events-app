import React from 'react';
import styled from 'styled-components';
import { SearchForEvents } from './SearchForEvents';
import { UpcomingEvents } from './UpcomingEvents';
import crowdImage from '../../../assets/images/crowd.jpg';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;

  & img {
    height: 300px;
    border: 1px solid black;
  }
`;

export const Main: React.FC = () => {
  return (
    <MainContainer>
      <SearchForEvents>Search</SearchForEvents>
      <UpcomingEvents>Comingup</UpcomingEvents>
      <img src={crowdImage} alt="Crowd at the concert" />
    </MainContainer>
  );
};
