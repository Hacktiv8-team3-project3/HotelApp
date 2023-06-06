import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slice/loginSlice';

const store = configureStore({
  reducer: {
    profile: loginSlice,
  },
});

export default store;
