import React, { useState, useEffect } from "react";
import moment from "moment";
import { Loader } from "../functional/Loader";

export default function Header() {
  // Define date
  let [loader, setLoader] = useState(true);
  const [currentDate, setDateState] = useState(new Date());
  const [currentWeather, setWeatherState] = useState([]);
  const tomorrow = moment().add(1, "days").format("dddd");
  const dayAfter = moment().add(2, "days").format("dddd");

  // Set UseEffect to update every 1000ms (1s)
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
    const getWeatherFromApi = async () => {
      const response = await fetch(
        "http://api.weatherapi.com/v1/forecast.json?" +
          process.env.REACT_APP_WEATHER_API_KEY
      );
      const responseJson = await response.json();
      console.log("json", responseJson);
      setWeatherState(responseJson);
      setLoader(false);
    };
    getWeatherFromApi();
    setInterval(getWeatherFromApi, 20000);
  }, []);

  if (loader === true) {
    return <Loader />;
  } else
    return (
      <div className="h-full w-full flex justify-between ">
        <div className="px-4 py-5 text-white">
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
            Today - {currentWeather.current.condition.text}
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
            {tomorrow} -{" "}
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
            {dayAfter} -{" "}
            {currentWeather.forecast.forecastday[2].day.condition.text}
          </span>
        </div>
      </div>
    );
}
