import React from 'react';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './components/main/Main';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  border: 1px solid black;
`;

export const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <Main />
    </AppContainer>
  );
};
