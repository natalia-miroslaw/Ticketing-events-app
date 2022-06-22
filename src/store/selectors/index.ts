import { RootState } from '../slices/types';
import { createSelector } from '@reduxjs/toolkit';
import { EventStateInterface } from '../slices/event-slice';

const getEventState = (state: RootState): EventStateInterface =>
  state.eventState;

const getAllEvents = createSelector(
  [getEventState],
  (eventsState) => eventsState.events
);

const get4Events = createSelector([getEventState], (eventsState) =>
  eventsState.events.slice(0, 4)
);

const getEventsByTag = createSelector(
  [getEventState],
  (eventsState) => eventsState.tags
);

const getEventsByFilters = createSelector(
  [getEventState],
  (eventsState) => eventsState.filters
);

const getSelectedEvent = (eventId: string | undefined) =>
  createSelector([getEventState], (eventsState) =>
    eventsState.events.find((event) => event.id === Number(eventId))
  );

export const eventsSelectors = {
  getAllEvents,
  get4Events,
  getEventsByTag,
  getEventsByFilters,
  getSelectedEvent
};
