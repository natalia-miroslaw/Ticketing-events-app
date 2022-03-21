import React from 'react';
import { SearchContainer } from './SearchForEvents.styles';
import { SearchByTagsInput } from './Inputs/SearchByTagsInput';
import { DateInput } from './Inputs/DateInput';
import { MyMap } from './Map/Map';

export const SearchForEvents: React.FC = () => {
  return (
    <SearchContainer>
      <SearchByTagsInput />
      <DateInput />
      <MyMap />
    </SearchContainer>
  );
};
