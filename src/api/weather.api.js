import { axiosInstance } from "./core";

export const getLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    // let lat = position.coords.latitude;
    // let lon = position.coords.longitude;
    let lat = 44.34;
    let lon = 10.99;
    getCurrentWeather(lat, lon);
  });
};

export const getForecast = async () => {
  const response = await axiosInstance.get("data/2.5/forecast", {
    params: {},
  });
  return response.data;
};

// direct GeoCode(location) - Coordinates by location name, only USA
export const getDirectGeoCode = async (cityName) => {
  const response = await axiosInstance.get("data/2.5/weather", {
    params: {
      cityName,
    },
  });
  return response.data;
};

export const getCurrentWeather = async (lat, lon) => {
  const response = await axiosInstance.get("data/2.5/weather", {
    params: {
      lat,
      lon,
    },
  });
  console.log("getCurrentWeather: ", response.data);
  return response.data;
};
