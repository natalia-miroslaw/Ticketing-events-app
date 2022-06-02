import React from 'react';
import { SearchForEvents } from '../components/main/SearchForEvents/SearchForEvents';
import { UpcomingEvents } from '../components/main/UpcomingEvents/UpcomingEvents';
import crowdImage from '../../assets/images/6.jpg';
import { CardMedia, Grid } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Grid container direction={'column'} mx={2}>
      <SearchForEvents />
      <UpcomingEvents />
      <CardMedia
        component="img"
        image={crowdImage}
        alt="Crowd at the concert"
      />
    </Grid>
  );
};

export default HomePage; //lazy loading importuje component default'owo
