import styled from "styled-components";
import { useEffect, useState } from "react";
import { getCurrentWeather } from "../../api/weather.api";

const CurrentCityWeather = () => {
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState("London");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getCurrentWeather(cityName);
      setData(data);
      console.log(data);
    })();
  }, [cityName]);

  const searchCityName = (e) => {
    if (e.key === "Enter") {
      setCityName(e.target.value);
      setInputValue("");
    }
  };

  return (
    <Wrapper>
      <AppName>Weather Checker</AppName>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={searchCityName}
        placeholder="search location"
      />
      <Container>
        <WeatherInfoBox>
          <CityName>{data.name}</CityName>
          <Weather>
            <Icon
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weatherIcon"
            />
            <Text>{data.weather[0].main}</Text>
          </Weather>
          <Temperature>{data.main.temp.toFixed()} °C</Temperature>
        </WeatherInfoBox>
        <DetailWeather>
          <Box>
            <p>Humidity</p>
            <h2>{data.main.humidity.toFixed()}%</h2>
          </Box>
          <Box>
            <p>Wind</p>
            <h2>{data.wind.speed.toFixed()} km/h</h2>
          </Box>
          <Box>
            <p>Feels Like</p>
            <h2>{data.main.feels_like.toFixed()} °C</h2>
          </Box>
        </DetailWeather>
      </Container>
    </Wrapper>
  );
};

export default CurrentCityWeather;

const Wrapper = styled.div`
  position: absolute;
  width: 50%;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppName = styled.h1`
  color: #fff;
  letter-spacing: 1px;
  font-size: 50px;
`;

const Input = styled.input`
  width: 92%;
  border: none;
  padding: 3% 4%;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
`;

const Container = styled.div`
  width: 100%;
  background-color: rgba(225, 225, 225, 0.4);
  border-radius: 10px;
  margin-top: 2%;
`;

const WeatherInfoBox = styled.div`
  color: #fff;
`;

const CityName = styled.h1``;

const Weather = styled.div``;

const Icon = styled.img`
  width: 24%;
`;

const Text = styled.h3`
  font-size: 22px;
  margin-top: -4%;
`;

const Temperature = styled.h1``;

const DetailWeather = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled.div`
  width: 28%;
  margin: 5% 0;
  color: #fff;
  border: 1px solid;
  border-radius: 10px;
  transition: all ease-in-out 0.5s;
  cursor: pointer;

  & > p {
    color: rgba(0, 0, 0, 0.6);
  }

  &:hover {
    background-color: #ececec80;
    border: 1px solid #ececec80;
  }
`;
