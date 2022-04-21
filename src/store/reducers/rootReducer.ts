import {
  Action,
  combineReducers,
  ThunkAction,
  ThunkDispatch
} from '@reduxjs/toolkit';

import eventSliceReducer from '../slices/event-slice';
import { RootState } from '../slices/types';

const rootReducer = combineReducers({
  eventState: eventSliceReducer
});

export type AppThunkDispatch<S = RootState, E = null> = ThunkDispatch<
  S,
  E,
  Action<string>
>;

export type AppThunkAction<R = void, S = RootState, E = null> = ThunkAction<
  Promise<R>, //Return type
  S, //State
  E, //Extra argument
  Action<string> //Action type
>;

export default rootReducer;
