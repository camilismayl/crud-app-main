import { environment } from "./app.config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: environment.apiMain,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
