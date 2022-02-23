import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter-slice';

const store = configureStore({
  reducer: filterSlice.reducer
});

export default store;
