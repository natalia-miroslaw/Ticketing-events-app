import React, { Fragment } from 'react';
import './App.css';
import { Header } from './app/components/header/Header';
import { Main } from './app/components/main/Main';

export const App: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
};
