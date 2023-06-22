import axios from "axios";
import { auth } from "../store/auth";

const API = import.meta.env.VITE_API;

const axiosInstance = axios.create({
  baseURL: API,
  timeout: 1000,
});

axiosInstance.defaults.headers.common["Content-Type"] = `application/json`;

axiosInstance.interceptors.request.use(
  (config) => {
    const store = auth();
    const { access } = store.getAuthData;
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
