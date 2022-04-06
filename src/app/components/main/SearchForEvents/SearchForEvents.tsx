import React from 'react';
import { SearchContainer } from './SearchForEvents.styles';
import { SearchByTagsInput } from './Inputs/SearchByTagsInput';
import { DateInput } from './Inputs/DateInput';
import { MyMap } from './Map/Map';
import { useDispatch, useSelector } from 'react-redux';
import { filterEventsAction } from '../../../../store/async-actions/filter-events.action';
import { getEventsFiltersSelector } from '../../../../store/selectors';

export const SearchForEvents: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getEventsFiltersSelector);

  const handleClick = (): void => {
    dispatch(filterEventsAction(filters));
  };
  return (
    <SearchContainer>
      <div>
        <SearchByTagsInput />
        <DateInput />
        <button onClick={() => handleClick()}>Search</button>
      </div>
      <MyMap />
    </SearchContainer>
  );
};
