import React from 'react';
import { SearchForEvents } from './SearchForEvents/SearchForEvents';
import { UpcomingEvents } from './UpcomingEvents/UpcomingEvents';
import crowdImage from '../../../assets/images/crowd.jpg';
import { Grid } from '@mui/material';

export const Main: React.FC = () => {
  return (
    <Grid container direction={'column'} mx={2}>
      <SearchForEvents />
      <UpcomingEvents />
      <img src={crowdImage} alt="Crowd at the concert" />
    </Grid>
  );
};
