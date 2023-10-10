import { useQuery } from "react-query";
import { LOCATION_QUERY_KEY } from "../consts/locationQueryKey";
import { useEffect, useState } from "react";
import { getCurrentWeather, getLocation } from "../api/weather.api";

const HomePage = () => {
  // const KORcode = LOCATION_QUERY_KEY.KOR.ISOcode;
  const KOR = LOCATION_QUERY_KEY.KOR;
  // console.log(KOR);

  const CHI = LOCATION_QUERY_KEY.US_CHI;
  // console.log(CHI);

  useEffect(() => {
    getLocation();
  });

  return (
    <>
      <h2>weather checker</h2>
      HomePage
    </>
  );
};
export default HomePage;
