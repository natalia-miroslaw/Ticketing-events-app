import React from 'react';
import { SearchForEvents } from '../components/main/SearchForEvents/SearchForEvents';
import { UpcomingEvents } from '../components/main/UpcomingEvents/UpcomingEvents';
import crowdImage from '../../assets/images/6.jpg';
import { CardMedia, Grid } from '@mui/material';
import { MyMap } from '../components/main/Map/Map';

const HomePage: React.FC = () => {
  return (
    <Grid container direction={'column'} mx={2}>
      <Grid item sm={12}>
        <SearchForEvents />
      </Grid>
      <Grid container item direction="row" sm={12}>
        <Grid item sm={12} md={7}>
          <UpcomingEvents />
        </Grid>
        <Grid item sm={12} md={5}>
          <MyMap />
        </Grid>
      </Grid>
      <CardMedia
        component="img"
        image={crowdImage}
        alt="Crowd at the concert"
      />
    </Grid>
  );
};

export default HomePage; //lazy loading importuje component default'owo
