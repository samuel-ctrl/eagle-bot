import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = "Bearer " + import.meta.env.VITE_STATIC_JWT_TOKEN;
// const accessToken = localStorage.getItem("accessToken");
// if (accessToken) {
  // }

export const Axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});