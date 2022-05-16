import React from 'react';
import { SearchForEvents } from '../components/main/SearchForEvents/SearchForEvents';
import { UpcomingEvents } from '../components/main/UpcomingEvents/UpcomingEvents';
import crowdImage from '../../assets/images/6.jpg';
import { Grid } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Grid container direction={'column'} mx={2}>
      <SearchForEvents />
      <UpcomingEvents />
      <img src={crowdImage} alt="Crowd at the concert" width={'100%'} />
    </Grid>
  );
};

export default HomePage; //lazy loading importuje component default'owo
