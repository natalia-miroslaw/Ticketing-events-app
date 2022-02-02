import React from 'react';
import { SearchContainer } from './SearchForEvents.styles';

export const SearchForEvents: React.FC = () => {
  return (
    <SearchContainer>
      <div className="search-inputs">Inputs</div>
      <div className="search-map">Map</div>
    </SearchContainer>
  );
};
