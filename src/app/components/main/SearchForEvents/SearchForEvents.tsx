import React from 'react';
import { SearchByTagsInput } from './Inputs/SearchByTagsInput';
import { DateInput } from './Inputs/DateInput';
import { useDispatch, useSelector } from 'react-redux';
import { filterEventsAction } from '../../../../store/async-actions/filter-events.action';
import { eventsSelectors } from '../../../../store/selectors';
import { Button, Grid } from '@mui/material';

export const SearchForEvents: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector(eventsSelectors.getEventsByFilters);

  const handleClick = (): void => {
    dispatch(filterEventsAction(filters));
  };

  return (
    <Grid
      spacing={2}
      container
      padding={1}
      justifyContent={'center'}
      alignItems={'center'}
      sm={12}>
      <Grid item sm={12} md={3} justifyContent={'center'}>
        <h4>What are you interested in?</h4>
      </Grid>
      <Grid item sm={12} md={3}>
        <SearchByTagsInput />
      </Grid>
      <Grid item sm={12} md={4}>
        <DateInput />
      </Grid>
      <Grid item sm={12} md={2}>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => handleClick()}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};
