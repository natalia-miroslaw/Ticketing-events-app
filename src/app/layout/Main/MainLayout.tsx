import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import styled from 'styled-components';

const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const MainLayout: React.FC = () => {
  return (
    <MainLayoutContainer>
      <Header />
      <Outlet />
    </MainLayoutContainer>
  );
};
