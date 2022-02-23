import React from 'react';
import { SearchContainer } from './SearchForEvents.styles';
import { Inputs } from './Inputs/Inputs';
import { MyMap } from './Map/Map';

export const SearchForEvents: React.FC = () => {
  return (
    <SearchContainer>
      <Inputs />
      <MyMap />
    </SearchContainer>
  );
};
