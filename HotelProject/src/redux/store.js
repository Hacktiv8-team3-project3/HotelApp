import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slice/loginSlice';
import hotelSlice from './slice/hotelSlice';

const store = configureStore({
  reducer: {
    profile: loginSlice,
    hotels: hotelSlice,
  },
});

export default store;
