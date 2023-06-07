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
  },
});

export const { selectHotel } = bookingSlice.actions;

export default bookingSlice.reducer;