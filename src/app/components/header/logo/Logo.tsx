import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Paths } from '../../../../routes/paths';
import { filterEventsAction } from '../../../../store/async-actions/filter-events.action';
import { getEventsFiltersSelector } from '../../../../store/selectors';

export const Logo: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getEventsFiltersSelector);

  const logoClickHandler = useCallback(
    ({ category, tag, date }) => {
      return dispatch(
        filterEventsAction({
          ...filters,
          category,
          tag,
          date
        })
      );
    },
    [dispatch, filters]
  );

  return (
    <div>
      <Link
        to={Paths.root}
        onClick={() =>
          logoClickHandler({
            category: '',
            tag: '',
            date: {
              dateFrom: null,
              dateTo: null
            }
          })
        }>
        logo
      </Link>
    </div>
  );
};
