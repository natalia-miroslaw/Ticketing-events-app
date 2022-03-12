import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Paths } from '../../../../routes/paths';
import { filterEventsAction } from '../../../../store/async-actions/filter-events.action';

export const Logo: React.FC = () => {
  const dispatch = useDispatch();

  const onClick = useCallback(
    (category: string) => {
      return dispatch(filterEventsAction(category));
    },
    [dispatch]
  );

  return (
    <div>
      <Link to={Paths.root} onClick={() => onClick('')}>
        logo
      </Link>
    </div>
  );
};
