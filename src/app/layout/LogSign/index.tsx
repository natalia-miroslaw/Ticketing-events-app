import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';

const LogSignLayoutContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
});

export const LogSignLayout: React.FC = () => {
  return (
    <LogSignLayoutContainer>
      <h1>Log In / Sign Up Page</h1>
      <Outlet />
    </LogSignLayoutContainer>
  );
};
