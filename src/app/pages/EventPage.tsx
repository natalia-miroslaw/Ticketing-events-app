import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getSelectedEvent } from '../../store/selectors';
import { EventType } from '../types/eventType';
import { Button, CardMedia, Grid } from '@mui/material';
import { fromUnixTime, millisecondsToSeconds } from 'date-fns';

const EventPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventPage: React.FC<EventType> = () => {
  const { eventId } = useParams();
  const selectedEvent = useSelector(getSelectedEvent(eventId));

  console.log('$selectedEvent', selectedEvent)

  return (
    <EventPageContainer>
      <Grid container spacing={3} padding={2}>
        <Grid item>
          <CardMedia
            component="img"
            height="200"
            image={selectedEvent?.photoUrl}
            alt={selectedEvent?.title}
          />
        </Grid>
        <Grid item>
          <Grid item>
            <h2>
              <b>{selectedEvent?.title}</b>
            </h2>
          </Grid>
          <Grid item>
            {selectedEvent?.localization.address}
            {selectedEvent?.localization.place}
          </Grid>
          <Grid item>
            {selectedEvent ? fromUnixTime(
            millisecondsToSeconds(selectedEvent.date)
            ).toLocaleString('gb-GB') : 'Brak daty'}
          </Grid>
          <Grid item>
            {selectedEvent?.price} PLN
            <Button color="primary" variant="outlined">
              BUY TICKET
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </EventPageContainer>
  );
};

export default EventPage;
