import React from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../../../../routes/paths';

export const Logo: React.FC = () => {
  return (
    <div>
      <Link to={Paths.root}>logo</Link>
    </div>
  );
};
