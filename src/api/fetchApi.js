import axios from "axios";

const API = import.meta.env.VITE_API;

const axiosInstance = axios.create({
  baseURL: API,
});

axiosInstance.defaults.headers.common["Content-Type"] = `application/json`;

export default axiosInstance;
