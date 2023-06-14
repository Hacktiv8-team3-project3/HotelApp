import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectHotel: null,
  bookingsData: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    selectHotel: (state, action) => {
      state.selectHotel = action.payload;
    },
    saveBookingData: (state, action) => {
      //   state.bookingsData = action.payload;
      // state.bookingsData = [...state.bookingsData, action.payload];
    state.bookingsData.push(action.payload);
    },
  },
});

export const { selectHotel, saveBookingData } = bookingSlice.actions;

export default bookingSlice.reducer;