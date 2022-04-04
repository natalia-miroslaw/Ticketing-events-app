import React from 'react';
import { useSelector } from 'react-redux';
import { EventsList } from '../components/shared/EventsList/EventsList';
import { getEventsSelector } from '../../store/selectors';

const SearchResultsPage: React.FC = () => {
  const getEvents = useSelector(getEventsSelector);
  return (
    <div>
      <h2>View all search results</h2>
      <EventsList events={getEvents} />
    </div>
  );
};

export default SearchResultsPage;
