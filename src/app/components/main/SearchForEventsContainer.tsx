import React, { Fragment } from 'react';

export const SearchForEventsContainer: React.FC = () => {
  return (
    <Fragment>
      <h2>Find an event close to You</h2>
      <div>
        <h3>What are You interested in?</h3>
        <input type="text" />
        <h3>Type of music / Dance style</h3>
        <input type="text" />
        <h3>Date</h3>
        <input type="date" />
      </div>
      <div>
        <div>Map</div>
        <input type="text" />
      </div>
      <button>Search</button>
    </Fragment>
  );
};
