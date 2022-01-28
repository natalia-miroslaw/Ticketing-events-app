import React, { Fragment } from 'react';
import styled from 'styled-components';
import { MenuButton } from './MenuButton';

const StyledMenu = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Menu: React.FC = () => {
  return (
    <StyledMenu>
      <MenuButton>Concerts</MenuButton>
      <MenuButton>Dancing Events</MenuButton>
      <MenuButton>Online Events</MenuButton>
    </StyledMenu>
  );
};
