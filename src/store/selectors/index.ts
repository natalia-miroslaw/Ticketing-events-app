import { RootState } from '../slices/types';
import { EventType } from '../../app/types/eventType';
import { Ifilters } from '../slices/event-slice';
// import { createSelector } from '@reduxjs/toolkit';

// const getEventSliceState = (state: RootState) => state.eventState;

// export const getEventsSelector = createSelector(
//   [getEventSliceState],
//   ({ event }) => event
// );

export const getEventsSelector = (state: RootState): EventType[] => state.eventState.event;

export const getEventsTagsSelector = (state: RootState): string[] =>
  state.eventState.tags;
export const getEventsDateSelector = (state: RootState): number =>
  state.eventState.date;
export const getEventsFiltersSelector = (state: RootState): Ifilters =>
  state.eventState.filters;
