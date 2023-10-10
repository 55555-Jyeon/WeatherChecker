import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  app_key: process.env.REACT_APP_API_KEY,
  withCredentials: true,
});
