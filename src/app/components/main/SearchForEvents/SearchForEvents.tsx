import React from 'react';
import { SearchContainer } from './SearchForEvents.styles';
import { SearchByTagsInput } from './Inputs/SearchByTagsInput';
import { DateInput } from './Inputs/DateInput';
import { MyMap } from './Map/Map';
import { useDispatch, useSelector } from 'react-redux';
import { filterEventsAction } from '../../../../store/async-actions/filter-events.action';
import { getEventsFiltersSelector } from '../../../../store/selectors';
import { Button, Grid } from '@mui/material';

export const SearchForEvents: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getEventsFiltersSelector);

  const handleClick = (): void => {
    dispatch(filterEventsAction(filters));
  };
  return (
    <SearchContainer>
      <Grid direction={'row'} spacing={2} container>
        <Grid
          padding={2}
          spacing={2}
          justifyContent={'center'}
          alignItems={'center'}
          container
          item
          direction={'column'}
          sm={12}
          md={6}>
          <Grid item>
            <h4>What are you interested in?</h4>
          </Grid>
          <Grid item>
            <SearchByTagsInput />
          </Grid>
          <Grid item>
            <DateInput />
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => handleClick()}>
              Search
            </Button>
          </Grid>
        </Grid>
        <Grid item sm={12} md={6}>
          <MyMap />
        </Grid>
      </Grid>
    </SearchContainer>
  );
};
