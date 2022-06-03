import { RootState } from '../slices/types';
import { EventType } from '../../app/types/eventType';
import { Ifilters } from '../slices/event-slice';

export const getEventsSelector = (state: RootState): EventType[] =>
  state.eventState.events;

export const getEventsTagsSelector = (state: RootState): string[] =>
  state.eventState.tags;
export const getEventsDateSelector = (state: RootState): number =>
  state.eventState.date;
export const getEventsFiltersSelector = (state: RootState): Ifilters =>
  state.eventState.filters;

export const get3EventsSelector = (state: RootState): EventType[] =>
  state.eventState.events.slice(0, 3);

export const getSelectedEventSelector = (state: RootState): EventType | null =>
  state.eventState.selectedEvent;

export const getSelectedEvent =
  (eventId: string | undefined) =>
  (state: RootState): EventType | undefined => {
    return (
      state.eventState.events.find((event) => event.id === Number(eventId))
    );
  };
