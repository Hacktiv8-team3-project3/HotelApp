import axios from "axios";

const api = axios.create({
  baseURL: "https://booking-com.p.rapidapi.com/v1/",
  headers: {
    "X-RapidAPI-Key": '698813ef96msh480db2f8fbe3864p128db5jsnadc3425ff540',
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    //cadangan 698813ef96msh480db2f8fbe3864p128db5jsnadc3425ff540
  },
});

export default api;