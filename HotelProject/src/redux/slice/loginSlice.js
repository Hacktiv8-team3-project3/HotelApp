import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  login: [],
  historyBook: []
  // isLoggedIn: false,
};

export const loginUser = createAsyncThunk('profile/loginUser', async ({ username, password, redirect, notFound }) => {
  try {
    if (username === 'Johndoe' && password === '12345') {
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
    changeProfile: (state, action) => {
      state.login = action.payload;
    },
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

export const { logout, changeProfile} = loginReducer.actions;
export default loginReducer.reducer;