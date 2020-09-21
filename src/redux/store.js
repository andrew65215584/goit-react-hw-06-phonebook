import { phonebookReducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: phonebookReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
