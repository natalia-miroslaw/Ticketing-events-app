import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { tagFilter: [] },
  reducers: {
    tagFilter() {},
    dateFilter() {}
  }
});
