import axios from "axios";

const api = axios.create({
  baseURL: "https://booking-com.p.rapidapi.com/v1/",
  headers: {
    "X-RapidAPI-Key": 'bf629fbebcmsh502d3f109d0da72p13e5c4jsn8e335b5b5a85',
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
});

export default api;