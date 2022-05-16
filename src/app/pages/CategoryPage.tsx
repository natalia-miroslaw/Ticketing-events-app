import React from 'react';
import { useSelector } from 'react-redux';
import { EventsList } from '../components/shared/EventsList/EventsList';
import { getEventsSelector } from '../../store/selectors';
import styled from 'styled-components';

const CategoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryPage: React.FC = () => {
  const getEvents = useSelector(getEventsSelector);
  return (
    <CategoryPageContainer>
      <h2>category name</h2>
      <EventsList events={getEvents} />
    </CategoryPageContainer>
  );
};

export default CategoryPage;
