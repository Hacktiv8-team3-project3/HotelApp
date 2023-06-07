import axios from "axios";

const api = axios.create({
  baseURL: "https://booking-com.p.rapidapi.com/v1/",
  headers: {
    "X-RapidAPI-Key": '2087ba9afamsh7d7731460f3d30fp1e401bjsnfef2f3cb78a2',
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
});

export default api;