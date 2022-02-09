import React from 'react';
import { SearchForEvents } from '../components/main/SearchForEvents/SearchForEvents';
import { UpcomingEvents } from '../components/main/UpcomingEvents/UpcomingEvents';

const HomePage: React.FC = () => {
  return (
    <>
      <SearchForEvents />
      <UpcomingEvents />
      <div>img</div>
    </>
  );
};

export default HomePage; //lazy loading importuje component default'owo
