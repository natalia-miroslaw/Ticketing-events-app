import { RootState } from '../slices/types';

export const getEventsSelector = (state: RootState) => state.eventState.event;
export const getEventsTagsSelector = (state: RootState) =>
  state.eventState.tags;
export const getEventsDateSelector = (state: RootState) =>
  state.eventState.date;
