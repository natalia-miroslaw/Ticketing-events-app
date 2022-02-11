import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LogSignLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LogSignLayout: React.FC = () => {
  return (
    <LogSignLayoutContainer>
      <h1>Log In / Sign Up Page</h1>
      <Outlet />
    </LogSignLayoutContainer>
  );
};
