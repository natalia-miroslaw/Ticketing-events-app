import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { styled } from '@mui/material';

const MainLayoutContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%'
});

export const MainLayout: React.FC = () => {
  return (
    <MainLayoutContainer>
      <Header />
      <Outlet />
    </MainLayoutContainer>
  );
};
