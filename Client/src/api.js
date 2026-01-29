import axios from "axios";

const api = axios.create({
  baseURL: "https://servercorefit.onrender.com",
});

export default api;
