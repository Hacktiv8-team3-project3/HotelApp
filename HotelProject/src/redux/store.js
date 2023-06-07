import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slice/loginSlice';
import detailSlice from './slice/detailSlice';
import bookingSlice from './slice/bookingSlice';
import wishlistSlice from './slice/wishlistSlice';

const store = configureStore({
  reducer: {
    profile: loginSlice,
    hotels: detailSlice,
    booking: bookingSlice,
    wishlist: wishlistSlice,
  },
});

export default store;
