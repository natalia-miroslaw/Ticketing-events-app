import { RootState } from '../slices/types';
// import { createSelector } from '@reduxjs/toolkit';

// const getEventSliceState = (state: RootState) => state.eventState;

// export const getEventsSelector = createSelector(
//   [getEventSliceState],
//   ({ event }) => event
// );

export const getEventsSelector = (state: RootState) => state.eventState.event;
export const getEventsTagsSelector = (state: RootState) =>
  state.eventState.tags;
export const getEventsDateSelector = (state: RootState) =>
  state.eventState.date;
