import { configureStore } from '@reduxjs/toolkit'; //read doc
import rootReducer from '../reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer
});

export default store;
