import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../reducer/profileSlice';

export default configureStore({
  reducer: {
    profile: profileReducer,
  },
});
