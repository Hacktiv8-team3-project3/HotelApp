import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlists: [],
};

export const wishlistSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    addWish: (state, action) => {
      const existsItem = state.wishlists?.find(
        (item) => item.name === action.payload?.name
      );
      if (!existsItem) {
        state.wishlists?.push(action.payload);
      } else {
      }
    },
    removeWish: (state, action) => {
      const removeItem = state.wishlists?.filter(
        (item) => item.name !== action.payload
      );
      state.wishlists = removeItem;
    },
  },
  extraReducers: {},
});

export const { addWish, removeWish } = wishlistSlice.actions;
export default wishlistSlice.reducer;