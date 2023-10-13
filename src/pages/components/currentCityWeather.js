import styled from "styled-components";
import { useEffect, useState } from "react";

const CurrentCityWeather = () => {
  const AppId = "05f85b9458c3257c0a7e584a9f2d5589";

  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [cityName, setCityName] = useState("Rome");
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    const response = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${AppId}&units=metric`
    );
    return response
      .then((res) => {
        if (res.status === 200) {
          isError && setIsError(false);
          return res.json();
        } else {
          throw new Error("Oops! Something went wrong");
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [cityName, isError]);

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
        error={isError}
      />
      <Container>
        {isLoading ? (
          <>
            <WeatherInfoBox>
              <CityName>{data.name}</CityName>
              <Weather>
                <Icon
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt="weatherIcon"
                />
                {<Text>{data.weather[0].main}</Text>}
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
          </>
        ) : (
          <>
            <WeatherInfoBox>
              <CityName>???</CityName>
              <Weather>
                <Icon alt="weatherIcon" />
                <Text>???</Text>
              </Weather>
              <Temperature>0 °C</Temperature>
            </WeatherInfoBox>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default CurrentCityWeather;

const Wrapper = styled.div`
  position: absolute;
  width: 50%;
  top: 16%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppName = styled.h1`
  color: #fff;
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
  background-color: #ffffff80;
  border-radius: 10px;
  margin-top: 10%;
`;

const WeatherInfoBox = styled.div``;

const CityName = styled.h1``;

const Weather = styled.div``;
const Icon = styled.img``;
const Text = styled.h3``;
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
  background-color: #ffffff8d;
  border-radius: 10px;
  transition: all ease-in-out 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #ececec80;
  }
`;
