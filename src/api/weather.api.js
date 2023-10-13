import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_BACKEND_URL,
  // app_key: process.env.REACT_APP_API_KEY,
  baseURL: "https://api.openweathermap.org/",
  app_key: "05f85b9458c3257c0a7e584a9f2d5589",
  withCredentials: true,
});

export const getCurrentWeather = async (cityName) => {
  const response = await axiosInstance.get("data/2.5/weather", {
    params: {
      cityName,
      appId: app_key,
    },
  });
  return response.data;
};
