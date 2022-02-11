import React from 'react';
import styled from 'styled-components';
import { Router } from '../routes/Router';
import { BrowserRouter } from 'react-router-dom';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid red;
`;

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Router />
      </AppContainer>
    </BrowserRouter>
  );
};
