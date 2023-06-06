import axios from "axios";

const api = axios.create({
  baseURL: "https://booking-com.p.rapidapi.com/v1/",
  headers: {
    "X-RapidAPI-Key": "db6befb25bmsh7289730c21c3fbfp15e6ddjsna064d26b23d3",
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
});

export default api;