import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slice/loginSlice';
import hotelSlice from './slice/hotelSlice';
import bookingSlice from './slice/bookingSlice';
import wishlistSlice from './slice/wishlistSlice';

const store = configureStore({
  reducer: {
    profile: loginSlice,
    hotels: hotelSlice,
    booking: bookingSlice,
    wishlist: wishlistSlice,
  },
});

export default store;
