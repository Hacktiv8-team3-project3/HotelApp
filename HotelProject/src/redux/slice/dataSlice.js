import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CONFIG from "../../config/config";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchHotelData = createAsyncThunk(
  "hotel/fetchHotelData",
  async () => {
    const {
      data: { result },
    } = await axios.get(`https://booking-com.p.rapidapi.com/v1/hotels`, {
      params: { page: "0" },
      headers: {
        "X-RapidAPI-Key": "9e09bd3a5amsh36d707dbf729466p18da5ejsna8e5e2ce1f46",
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
      },
    });
    const response = await axios.get(
      `https://booking-com.p.rapidapi.com/v1/hotels/photos`,
      {
        params: {
          hotel_id: "1377073",
          locale: "en-gb",
        },
        headers: {
          "X-RapidAPI-Key":
            "9e09bd3a5amsh36d707dbf729466p18da5ejsna8e5e2ce1f46",
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
      }
    );

    const data1 = result;
    const data2 = response.data;
    const mergedData = data1.map((item, index) => {
      return {
        ...item,
        ...data2[index],
        price: Math.floor(Math.random() * 1000)
          .toString()
          .padStart(3, "0"),
      };
    });
    // return { data1, data2 };
    return mergedData.slice(0, 10);

    // return result;
  }
);

const dataSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotelData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHotelData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        // if (!state.data.length) {
        //   state.data = action.payload;
        // }
      })
      .addCase(fetchHotelData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getAllHotel = (state) => state.hotels.data;
export default dataSlice.reducer;