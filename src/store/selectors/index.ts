import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../slices/types';

export const getEvents = useSelector(
  (state: RootState) => state.eventState.event
);
