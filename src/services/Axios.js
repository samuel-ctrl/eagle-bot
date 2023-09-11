import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";
// const accessToken = localStorage.getItem("accessToken");
// if (accessToken) {
//   axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
// }

export const Axios = axios.create({
  baseURL: 'http://192.168.5.162:8000/',
});