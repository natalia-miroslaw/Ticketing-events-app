import React from 'react';
import styled from 'styled-components';

const InfoPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid blue;
`;

const OrganizerInfoPage: React.FC = () => {
  return <InfoPageContainer>Info for organizers here</InfoPageContainer>;
};

export default OrganizerInfoPage;
