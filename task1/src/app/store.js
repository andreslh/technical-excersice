import { configureStore } from '@reduxjs/toolkit';
import timezonesReducer from '../features/timezones/timezonesSlice';

export default configureStore({
  reducer: {
    timezones: timezonesReducer,
  },
});
