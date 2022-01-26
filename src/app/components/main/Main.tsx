import React from 'react';

import crowdImage from '../../../assets/images/crowd.jpg';

export const Main: React.FC = () => {
  return (
    <main>
      <div>div with map and inputs</div>
      <div>div with upcoming events</div>
      <div>
        <img
          src={crowdImage}
          alt="Crowd and lights at the concert"
          width="800px"
        />
      </div>
    </main>
  );
};
