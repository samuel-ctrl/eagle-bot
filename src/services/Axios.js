import axios from "axios";
import { baseUrl } from "../components/constent/constent";

axios.defaults.headers.common["Content-Type"] = "application/json";
// const accessToken = localStorage.getItem("accessToken");
// if (accessToken) {
//   axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
// }

export const Axios = axios.create({
  baseURL: baseUrl,
});