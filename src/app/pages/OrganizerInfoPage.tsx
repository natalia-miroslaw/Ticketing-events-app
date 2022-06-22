import React from 'react';
import { styled } from '@mui/material';

const InfoPageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  border: '1px solid blue'
});

const OrganizerInfoPage: React.FC = () => {
  return <InfoPageContainer>Info for organizers here</InfoPageContainer>;
};

export default OrganizerInfoPage;
