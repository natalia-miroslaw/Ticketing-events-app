import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Router } from '../routes/Router';
import { BrowserRouter } from 'react-router-dom';
import { filterEventsAction } from '../store/async-actions/filter-events.action';
import { getEventsFiltersSelector } from '../store/selectors';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme/Overrides';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f9f9f9;
`;

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getEventsFiltersSelector);

  useEffect(() => {
    dispatch(
      filterEventsAction({
        ...filters,
        category: '',
        tag: '',
        date: {
          dateFrom: null,
          dateTo: null
        }
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme()}>
        <AppContainer>
          <Router />
        </AppContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
};
