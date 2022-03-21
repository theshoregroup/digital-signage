import React, { useState, useEffect } from "react";
import { Loader } from "../functional/Loader";
import logo from "../../images/shoreLogo.png";
import moment from "moment";

export default function Weather(props) {
  const [loader, setLoader] = useState(true);
  const [currentWeather, setWeatherState] = useState([]);
  const config = process.env.REACT_APP_WEATHER_API_KEY
  let location = "&q=Brighton";
  let tomorrow = moment().add(1, "days").format("dddd");
  let dayAfter = moment().add(2, "days").format("dddd");
  

  // Set UseEffect to update every 1000ms (1s)
  useEffect(() => {
    const getWeatherFromApi = async () => {
      const response = await fetch(
        "http://api.weatherapi.com/v1/forecast.json?" + config + location + "&days=3"
        
      );
      const responseJson = await response.json();
      console.log("json", responseJson);
      setWeatherState(responseJson);
      if (currentWeather != null) {
        setLoader(false);
      }
    };
    getWeatherFromApi();

  }, [currentWeather, location, config]);
  console.log(currentWeather);
  if (loader === true) {
    return (
      <div className="h-full w-full flex justify-between ">
        <div className="px-4 py-5  ">
          <span className="text-3xl text-semibold">
            Today{" "}
            <div className="text-2xl">
              {" "}
              <Loader />
            </div>
            <span className="block text-5xl font-semibold"></span>
          </span>
        </div>
        <div className="px-4 py-5 ">
          <span className="text-3xl text-semibold">
            {tomorrow}
            <div className="text-2xl"> </div>
            <Loader />
          </span>
        </div>
        <div className="px-4 py-5 ">
          <span className="text-3xl text-semibold">
            {dayAfter}
            <div className="text-2xl"> </div>
            <span className="block text-5xl font-semibold">
              <Loader />
            </span>
          </span>
        </div>
        <div>
          <img
            className="px-4 "
            src={logo}
            alt="logo"
            height="250"
            width="250"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-full w-full flex justify-between ">
        <div className="px-4 py-5 ">
          <span className="text-3xl text-semibold">
            Today{" "}
            <div className="text-2xl">
              {" "}
              {currentWeather.current.condition.text}{" "}
            </div>
            <span className="block text-5xl font-semibold">
              <img
                className="mx-auto"
                src={currentWeather.current.condition.icon}
                alt=""
              />
              {currentWeather.current.temp_c}°C
            </span>
          </span>
        </div>
        <div className="px-4 py-5 ">
          <span className="text-3xl text-semibold">
            {tomorrow}
            <div className="text-2xl">
              {" "}
              {currentWeather.forecast.forecastday[1].day.condition.text}
            </div>
            <span className="block text-5xl font-semibold">
              <img
                className="mx-auto"
                src={currentWeather.forecast.forecastday[1].day.condition.icon}
                alt=""
              />
              {currentWeather.forecast.forecastday[1].day.avgtemp_c}°C
            </span>
          </span>
        </div>
        <div className="px-4 py-5 ">
          <span className="text-3xl text-semibold">
            {dayAfter}
            <div className="text-2xl">
              {" "}
              {currentWeather.forecast.forecastday[2].day.condition.text}
            </div>
            <span className="block text-5xl font-semibold">
              <img
                className="mx-auto"
                src={currentWeather.forecast.forecastday[2].day.condition.icon}
                alt=""
              />
              {currentWeather.forecast.forecastday[2].day.avgtemp_c}°C
            </span>
          </span>
        </div>
        <div>
          <img
            className="px-4 "
            src={logo}
            alt="logo"
            height="250"
            width="250"
          />
        </div>
      </div>
    );
  }
}
