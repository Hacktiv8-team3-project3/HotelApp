import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialState,
  reducers: {
    addWish: (state, action) => {
      const existsItem = state.wishlist.find(
        (item) => item.name === action.payload?.name
      );
      if (!existsItem) {
        state.wishlist?.push(action.payload);
      } else {
      }
    },
    removeWish: (state, action) => {
      const removeItem = state.wishlist?.filter(
        (item) => item.name !== action.payload
      );
      state.wishlist = removeItem;
    },
  },
  extraReducers: {},
});

export const { addWish, removeWish } = wishlistSlice.actions;
export default wishlistSlice.reducer;