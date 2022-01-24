import React, { useState, useEffect } from "react";
import defaultWeatherData from "../../data/defaultWeatherData";

export default function Header() {
  // Define date
  const [currentDate, setDateState] = useState(new Date());
  const [currentWeather, setWeatherState] = useState(defaultWeatherData);

  // Set UseEffect to update every 1000ms (1s)
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
    const getWeatherFromApi = async () => {
      const response = await fetch(
        "http://api.weatherapi.com/v1/forecast.json?key=ac517e0edf3142a6ae282635211410&q=Brighton&days=3&aqi=no&alerts=yes"
      );
      const responseJson = await response.json();
      console.log("json", responseJson);
      setWeatherState(responseJson);
    };
    setInterval(getWeatherFromApi, 10000);
  }, []);

  return (
    <div className="h-full w-full flex justify-between ">
      <div className="px-4 py-5 text-white" >
        <span className="block text-7xl font-semibold">
          {currentDate.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </span>
        <span className="text-4xl">
          {currentDate.toLocaleDateString("en-GB", {
            dateStyle: "full",
          })}
        </span>
      </div>
      <div className="px-4 py-5  ">
        <span className="block text-5xl font-semibold">
          {currentWeather.current.temp_c}°C
        </span>
        <span className="text-2xl ">
          <img src={currentWeather.current.condition.icon} alt="" />
          Today -{" "}
          {currentWeather.current.condition.text}
        </span>
      </div>
      <div className="px-4 py-5  ">
        <span className="block text-5xl font-semibold">
          {currentWeather.forecast.forecastday[1].day.avgtemp_c}°C
        </span>
        <span className="text-2xl ">
          <img
            src={currentWeather.forecast.forecastday[1].day.condition.icon}
            alt="icon"
          />
          Tomorrow -{" "}
          {currentWeather.forecast.forecastday[1].day.condition.text}
        </span>
      </div>
      <div className="px-4 py-5  ">
        <span className="block text-5xl font-semibold">
          {currentWeather.forecast.forecastday[2].day.avgtemp_c}°C
        </span>
        <span className="text-2xl ">
          <img
            src={currentWeather.forecast.forecastday[2].day.condition.icon}
            alt="icon"
          />
          {currentWeather.forecast.forecastday[2].date} -{" "}
          {currentWeather.forecast.forecastday[2].day.condition.text}
        </span>
      </div>
    </div>
  );
}
