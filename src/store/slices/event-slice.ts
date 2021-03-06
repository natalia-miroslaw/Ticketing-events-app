import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventType } from '../../app/types/eventType';

export interface Ifilters {
  category: string;
  tag: string;
  date: {
    dateFrom: number | null;
    dateTo: number | null;
  };
}

export interface EventStateInterface {
  event: EventType[];
  tags: string[];
  showEvent: boolean;
  date: number;
  filters: Ifilters;
  selectedEvent: EventType | null;
}

const initialEventState: EventStateInterface = {
  event: [],
  tags: [],
  showEvent: true,
  date: new Date().getTime(),
  filters: {
    category: '',
    tag: '',
    date: {
      dateFrom: null,
      dateTo: null
    }
  },
  selectedEvent: null
};

const eventSlice = createSlice({
  name: 'eventFilter',
  initialState: initialEventState,
  reducers: {
    setFilteredEvents(
      state: EventStateInterface,
      action: PayloadAction<EventType[] | undefined>
    ): void {
      if (action.payload) {
        state.event = action.payload;
      }
    },
    setEventsTags(state: EventStateInterface, action: PayloadAction<string[]>) {
      state.tags = action.payload;
    },
    setFilters(state: EventStateInterface, action: PayloadAction<Ifilters>) {
      state.filters = action.payload;
    },
    setSelectedEvent(
      state: EventStateInterface,
      action: PayloadAction<EventType['id']>
    ) {
      state.selectedEvent =
        [...state.event].find((event) => event.id === action.payload) || null;
    }
  }
});

const { actions, reducer: eventReducer } = eventSlice;

export const {
  setFilteredEvents,
  setEventsTags,
  setFilters,
  setSelectedEvent
} = actions;
export default eventReducer;
