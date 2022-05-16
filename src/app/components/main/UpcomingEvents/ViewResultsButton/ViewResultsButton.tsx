import React from 'react';
import { filterEventsAction } from '../../../../../store/async-actions/filter-events.action';
import { useDispatch, useSelector } from 'react-redux';
import { getEventsFiltersSelector } from '../../../../../store/selectors';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const ViewResultsButton: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getEventsFiltersSelector);

  const handleClick = (): void => {
    dispatch(filterEventsAction(filters));
  };

  return (
    <Link to={'/search-results'}>
      <Button
        variant="contained"
        onClick={() => handleClick()}
        size="large"
        sx={{ margin: '15px 0px 35px' }}>
        View More Events
      </Button>
    </Link>
  );
};
