import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCurrentWeather } from "../../api/weather.api";

const SearchCity = ({ cityName, setCityName }) => {
  const [inputValue, setInputValue] = useState();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setCityName(e.target.value);
      setInputValue("");
    }
  };

  useEffect(() => {
    getCurrentWeather(cityName);
  });

  return (
    <>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleSearch}
        placeholder="search location"
      />
    </>
  );
};
export default SearchCity;

const Input = styled.input`
  width: 92%;
  border: none;
  padding: 3% 4%;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
`;
