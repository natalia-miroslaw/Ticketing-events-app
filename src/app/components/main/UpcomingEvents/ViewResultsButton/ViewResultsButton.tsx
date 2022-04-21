import React from 'react';
import { filterEventsAction } from '../../../../../store/async-actions/filter-events.action';
import { useDispatch, useSelector } from 'react-redux';
import { getEventsFiltersSelector } from '../../../../../store/selectors';
import { Button } from '@mui/material';

export const ViewResultsButton: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getEventsFiltersSelector);

  const handleClick = (): void => {
    dispatch(filterEventsAction(filters));
  };

  return (
    <Button
      variant="contained"
      href="/search-results"
      onClick={() => handleClick()}
      size="large"
      sx={{ margin: '25px' }}>
      View More Events
    </Button>
  );
};
