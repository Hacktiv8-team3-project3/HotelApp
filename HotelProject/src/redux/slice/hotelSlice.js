import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CONFIG from "../../config/config";

const initialState = {
  data: [],
  top: [],
  pop: [],
  status: "idle",
  error: null,
};

export const fetchHotelData = createAsyncThunk(
  "hotel/fetchHotelData",
  async () => {
    const {
      data: { result },
    } = await axios.get(`https://booking-com.p.rapidapi.com/v1/static/hotels`, {
      params: { page: "0" },
      headers: {
        "X-RapidAPI-Key": "db6befb25bmsh7289730c21c3fbfp15e6ddjsna064d26b23d3",
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
            "db6befb25bmsh7289730c21c3fbfp15e6ddjsna064d26b23d3",
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
    return mergedData.slice(0, 10);
  }
);

export const fetchHotelId = createAsyncThunk(
  "idHotel/fetchHotelId",
  async () => {
    const {
      data: { result },
    } = await axios.get(`https://booking-com.p.rapidapi.com/v1/static/hotels`, {
      params: { page: "0", country: "id" },
      headers: {
        "X-RapidAPI-Key": "db6befb25bmsh7289730c21c3fbfp15e6ddjsna064d26b23d3",
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
            "db6befb25bmsh7289730c21c3fbfp15e6ddjsna064d26b23d3",
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
    return mergedData.slice(11, 20);
  }
);

export const fetchHotelPop = createAsyncThunk(
  "popHotel/fetchHotelPop",
  async () => {
    const {
      data: { result },
    } = await axios.get(`https://booking-com.p.rapidapi.com/v1/static/hotels`, {
      params: { page: "0", country: "kr" },
      headers: {
        "X-RapidAPI-Key": "db6befb25bmsh7289730c21c3fbfp15e6ddjsna064d26b23d3",
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
            "db6befb25bmsh7289730c21c3fbfp15e6ddjsna064d26b23d3",
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
    return mergedData.slice(21, 30);
  }
);

const hotelSlice = createSlice({
  name: "hotels",
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
      })
      .addCase(fetchHotelData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(fetchHotelId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHotelId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.top = action.payload;
      })
      .addCase(fetchHotelId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(fetchHotelPop.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHotelPop.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pop = action.payload;
      })
      .addCase(fetchHotelPop.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getAllHotel = (state) => state.hotels.data;
export default hotelSlice.reducer;