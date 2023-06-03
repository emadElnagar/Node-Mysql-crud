import { configureStore } from '@reduxjs/toolkit';
import BookReducer from './features/BookFeatures';

export const store = configureStore({
  reducer: {
    books: BookReducer
  }
});
