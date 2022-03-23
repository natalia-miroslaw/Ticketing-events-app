import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventType } from '../../app/types/eventType';

export interface EventStateInterface {
  event: EventType[];
  tags: string[];
  showEvent: boolean;
  date: number;
}

const initialEventState: EventStateInterface = {
  event: [],
  tags: [],
  showEvent: true,
  date: new Date().getTime()
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
    }
    // dateFilter() {}
  }
});

const { actions, reducer: eventReducer } = eventSlice;

export const { setFilteredEvents, setEventsTags } = actions;
export default eventReducer;
