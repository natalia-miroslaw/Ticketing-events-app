import React from 'react';
import { useSelector } from 'react-redux';
import { EventsList } from '../components/shared/EventsList/EventsList';
import { getEventsSelector } from '../../store/selectors';

const CategoryPage: React.FC = () => {
  const getEvents = useSelector(getEventsSelector);
  return (
    <div>
      <h2>Concerts / Dancing Events / Online Events Page</h2>
      <EventsList events={getEvents} />
    </div>
  );
};

export default CategoryPage;
