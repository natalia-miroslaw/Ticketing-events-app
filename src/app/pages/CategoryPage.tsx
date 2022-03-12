import React from 'react';
import { EventsList } from '../components/shared/EventsList/EventsList';
import { getEvents } from '../../store/selectors';

const CategoryPage: React.FC = () => {
  return (
    <div>
      <h2>Concerts / Dancing Events / Online Events Page</h2>
      <EventsList events={getEvents} />
    </div>
  );
};

export default CategoryPage;
