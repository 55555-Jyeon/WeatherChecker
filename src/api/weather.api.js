import axios from "axios";

export const getCurrentWeather = async (cityName) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=189271b827844bff7388350c44848615&units=metric`
  );
  return response.data;
};
