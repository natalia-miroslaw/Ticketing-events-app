import React from 'react';
import { useSelector } from 'react-redux';
import { EventsList } from '../components/shared/EventsList/EventsList';
import { getEventsSelector } from '../../store/selectors';
import styled from 'styled-components';

const SearchResultsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchResultsPage: React.FC = () => {
  const getEvents = useSelector(getEventsSelector);
  return (
    <SearchResultsPageContainer>
      <h2>View all search results</h2>
      <EventsList events={getEvents} />
    </SearchResultsPageContainer>
  );
};

export default SearchResultsPage;
