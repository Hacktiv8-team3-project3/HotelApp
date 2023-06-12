import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectHotel: [],
  // bookingsData: [],
  historyBook:[],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    // selectHotel: (state, action) => {
    //   state.selectHotel = action.payload;
    // },
    // selectHotel: (state, action) => {
    //   state.historyBook.push(action.payload);
    // },
    selectHotel: (state, action) => {
      const existsItem = state.selectHotel.find(
        (item) => item.name = action.payload?.name
        // state.selectHotel = action.payload
      );
      // const existsItem = state.selectHotel = action.payload;
      if (!existsItem) {
        state.historyBook.push(action.payload);
      } else {
      }
    },
  },
});

export const { selectHotel } = bookingSlice.actions;

export default bookingSlice.reducer;