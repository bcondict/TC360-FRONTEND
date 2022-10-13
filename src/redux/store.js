import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './authSlice';

export const store = configureStore({
  reducer: {
    auth: counterReducer,
  },
});
