import React from 'react';
import { useSelector } from 'react-redux';
import { EventsList } from '../components/shared/EventsList/EventsList';
import { eventsSelectors } from '../../store/selectors';
import { styled } from '@mui/material';

const CategoryPageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const CategoryPage: React.FC = () => {
  const getEvents = useSelector(eventsSelectors.getAllEvents);
  return (
    <CategoryPageContainer>
      <h2>category name</h2>
      <EventsList events={getEvents} />
    </CategoryPageContainer>
  );
};

export default CategoryPage;
