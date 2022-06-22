import React from 'react';
import { useSelector } from 'react-redux';
import { EventsList } from '../components/shared/EventsList/EventsList';
import { eventsSelectors } from '../../store/selectors';
import { styled } from '@mui/material';

const SearchResultsPageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const SearchResultsPage: React.FC = () => {
  const getEvents = useSelector(eventsSelectors.getAllEvents);
  return (
    <SearchResultsPageContainer>
      <h2>View all search results</h2>
      <EventsList events={getEvents} />
    </SearchResultsPageContainer>
  );
};

export default SearchResultsPage;
