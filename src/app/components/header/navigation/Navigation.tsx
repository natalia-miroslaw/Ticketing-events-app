import React, { useCallback } from 'react';
import { NavContainer } from './Navigation.styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterEventsAction } from '../../../../store/async-actions/filter-events.action';
import { AppThunkDispatch } from '../../../../store/reducers/rootReducer';

const categories = [
  { name: 'Concerts', status: false },
  { name: 'Online Events', status: false },
  { name: 'Dancing Workshops', status: false }
];

export const NavByCategory: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();

  const onClick = useCallback(
    ({ category }): Promise<void> => {
      return dispatch(filterEventsAction({ category: category }));
    },
    [dispatch]
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
