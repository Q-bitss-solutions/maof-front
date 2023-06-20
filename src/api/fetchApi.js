import axios from "axios";

const API = import.meta.env.VITE_API;
const access = localStorage.getItem("access");

const axiosInstance = axios.create({
  baseURL: API,
});

// Agregar encabezado común
axiosInstance.defaults.headers.common["Content-Type"] = `application/json`;
axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${access}`;

export default axiosInstance;
