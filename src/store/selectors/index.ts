import { RootState } from '../slices/types';
import { EventType } from '../../app/types/eventType';
import { Ifilters } from '../slices/event-slice';

export const getEventsSelector = (state: RootState): EventType[] =>
  state.eventState.event;

export const getEventsTagsSelector = (state: RootState): string[] =>
  state.eventState.tags;
export const getEventsDateSelector = (state: RootState): number =>
  state.eventState.date;
export const getEventsFiltersSelector = (state: RootState): Ifilters =>
  state.eventState.filters;
