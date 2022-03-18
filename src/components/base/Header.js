import React, { useState, useEffect } from "react";
import moment from "moment";
import { Loader } from "../functional/Loader";
import logo from "../../images/shoreLogo.png";

export default function Header() {
  // Define date
  let [loader, setLoader] = useState(true);
  const [currentDate, setDateState] = useState(new Date());
  const [currentWeather, setWeatherState] = useState([]);
  const tomorrow = moment().add(1, "days").format("dddd");
  const dayAfter = moment().add(2, "days").format("dddd");
  let location = "q=Brighton";

  // Set UseEffect to update every 1000ms (1s)
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
    const getWeatherFromApi = async () => {
      const response = await fetch(
        "http://api.weatherapi.com/v1/forecast.json?" +
          location +
          "&days=3" +
          process.env.REACT_APP_WEATHER_API_KEY
      );
      const responseJson = await response.json();
      console.log("json", responseJson);
      setWeatherState(responseJson);
      setLoader(false);
    };
    getWeatherFromApi();
    setInterval(getWeatherFromApi, 20000);
  }, [location]);

  if (loader === true) {
    return <Loader />;
  } else
    return (
      <div className="h-full w-full flex justify-between text-center">
        <div className="px-4 py-5 text-white">
          <span className="block text-9xl font-semibold">
            {currentDate.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </span>
          <span className="text-5xl">
            {currentDate.toLocaleDateString("en-GB", {
              dateStyle: "full",
            })}
          </span>
        </div>
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
            {dayAfter}
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
            Today{" "}
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
          <img className="px-4 " src={logo} alt="logo" height="250" width="250"></img>
        </div>
      </div>
    );
}
