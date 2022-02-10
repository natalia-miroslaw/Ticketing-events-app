import { NavContainer } from './Navigation.styles';
import { Link } from 'react-router-dom';
import { Paths } from '../../../../routes/paths';
import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to={Paths.category}>Concerts</Link>
        </li>
        <li>
          <Link to={Paths.category}>Dancing Events</Link>
        </li>
        <li>
          <Link to={Paths.category}>Online Events</Link>
        </li>
      </ul>
    </NavContainer>
  );
};
