import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  login: [],
  // isLoggedIn: false,
};

export const loginUser = createAsyncThunk('profile/loginUser', async ({ username, password, redirect, notFound }) => {
  try {
    if (username === 'johndoe' && password === '12345') {
      redirect(true);
      return { name: 'Kelompok 3', email: 'johndoe@gmail.com', phoneNumber: '0123456' };
    }
    notFound(true);
  } catch (error) {
    throw error(error);
  }
});


const loginReducer = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    unWishlist: (state, action) => {
      const exist = state.wishlist.find((item) => item.name === action.payload.name);
      if (exist) {
        state.wishlist = state.wishlist.filter((item) => item.name !== action.payload.name);
      }
    },
    wishlistAdded: (state, action) => {
      const exist = state.wishlist.find((item) => item.name === action.payload.name);
      if (!exist) {
        state.wishlist.push(action.payload);
      }
    },
    changeProfile: (state, action) => {
      state.login = action.payload;
    },
    // bookingAdded: (state, action) => {
    //   state.historyBook.push(action.payload);
    // },
    logout: (state, action) => {
      state.login = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.login = action.payload;
    });
  },
});

export const { logout, changeProfile, wishlistAdded, unWishlist } = loginReducer.actions;
export default loginReducer.reducer;