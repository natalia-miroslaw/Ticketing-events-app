import React, { useCallback } from 'react';
import { NavContainer } from './Navigation.styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterEventsAction } from '../../../../store/async-actions/filter-events.action';
import { AppThunkDispatch } from '../../../../store/reducers/rootReducer';
import { getEventsFiltersSelector } from '../../../../store/selectors';

const categories = [
  { name: 'Concerts', status: false },
  { name: 'Online Events', status: false },
  { name: 'Dancing Workshops', status: false }
];

export const NavByCategory: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const filters = useSelector(getEventsFiltersSelector);

  const onClick = useCallback(
    ({ category }): Promise<void> => {
      console.log('category', category);
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
              <Link
                onClick={() => onClick({ category: category.name, tag: '' })}
                to={`/category/${category.name}`}>
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </NavContainer>
  );
};
