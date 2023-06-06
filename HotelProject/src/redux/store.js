import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/loginSlice";
// import homeSlice from "./slice/homeSlice";
// import detailSlice from "./slice/detailSlice";
// import bookingSlice from "./slice/bookingSlice";
// import searchSlice from "./slice/searchSlice";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  loginSlice: loginSlice,
  // home: homeSlice,
  // detail: detailSlice,
  // booking: bookingSlice,
  // search: searchSlice,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: [thunk],
});
