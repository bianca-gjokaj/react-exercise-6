import { useEffect, useState } from "react";
import { fetchWeather } from "../services/post.service";
import { Weather } from "../types";

export function WeatherFore() {
  const [weather, setWeather] = useState<Weather[]>([]);
  const [weathers, setWeathers] = useState<Weather>();

  // useEffect(() => {
  //   getWeather();
  // }, []);

  function getWeather() {
    fetchWeather().then((response) => setWeather(response.data));
  }

  return (
    <>
      <h1>Weather Forecast</h1>
      {weathers && Object.values(weathers!)?.length > 0 && (
        <ol>
          <li>Name: {weathers?.name}</li>
          <li>Temperature: {weathers?.temperature}</li>
          <li>Icon: {weathers?.icon}</li>
          <li>DetailedForecast: {weathers?.detailedForecast}</li>
        </ol>
      )}

      {weather.map((forecast) => (
        <li>
          {forecast.name} {forecast.temperature} {forecast.icon}
          {forecast.detailedForecast}
        </li>
      ))}
    </>
  );
}
