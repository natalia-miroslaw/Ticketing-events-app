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

export const get3EventsSelector = (state: RootState): EventType[] =>
  state.eventState.event.slice(0, 3);

export const getSelectedEventSelector = (state: RootState): EventType | null =>
  state.eventState.selectedEvent;
