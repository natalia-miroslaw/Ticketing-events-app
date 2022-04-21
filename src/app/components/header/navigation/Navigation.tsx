import React, { useCallback } from 'react';
import { NavContainer } from './Navigation.styles';
import { useDispatch, useSelector } from 'react-redux';
import { filterEventsAction } from '../../../../store/async-actions/filter-events.action';
import { AppThunkDispatch } from '../../../../store/reducers/rootReducer';
import { getEventsFiltersSelector } from '../../../../store/selectors';
import { Button } from '@mui/material';

const categories = [
  { name: 'Concerts', status: false },
  { name: 'Online Events', status: false },
  { name: 'Dancing Workshops', status: false }
];

export const NavByCategory: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const filters = useSelector(getEventsFiltersSelector);

  const handleClick = useCallback(
    ({ category }): Promise<void> => {
      return dispatch(
        filterEventsAction({
          ...filters,
          category: category,
          tag: '',
          date: { dateFrom: null, dateTo: null }
        })
      );
    },
    [dispatch, filters]
  );

  return (
    <NavContainer>
      <ul>
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <Button
                variant={'outlined'}
                onClick={() => handleClick({ category: category.name })}
                href={`/category/${category.name}`}>
                {category.name}
              </Button>
            </li>
          );
        })}
      </ul>
    </NavContainer>
  );
};
