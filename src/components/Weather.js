import { useEffect, useState } from "react";

const Weather = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getWeatherFromApi = async () => {
      const response = await fetch(
        "http://api.weatherapi.com/v1/forecast.json?key=ac517e0edf3142a6ae282635211410&q=Brighton&days=3&aqi=no&alerts=yes"
      );
      const responseJson = await response.json();
      console.log("json", responseJson);
      setData(responseJson);
    };
    getWeatherFromApi();
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="text-xl p-14 shadow-md bg-gradient-to-br from-green-400 to-cyan-500 ">
        <h6>{data?.location?.name}</h6>
        <h6>Today</h6>
        <h6>
          {data?.current?.temp_c}°C, {data?.current?.condition?.text},{" "}
          {data?.current?.wind_mph}wind
          <img src={data?.current?.condition?.icon} alt="icon"/>
        </h6>
      </div>
      <div className="text-xl p-14 shadow-md bg-gradient-to-br from-red-400 to-cyan-500 ">
        <h6>
          {data?.forecast?.forecastday[1]?.date},
          {data?.forecast?.forecastday[1]?.day?.avgtemp_c}°C,
          {data?.forecast?.forecastday[1]?.day?.condition?.text},
          <img src={data?.forecast?.forecastday[1]?.day?.condition?.icon} alt="icon"/>
        </h6>
      </div>
      <div className="text-xl p-14 shadow-md bg-gradient-to-br from-blue-400 to-cyan-500 ">
        <h6>
          {data?.forecast?.forecastday[2]?.date},
          {data?.forecast?.forecastday[2]?.day?.avgtemp_c}°C,
          {data?.forecast?.forecastday[2]?.day?.condition?.text},
          <img src={data?.forecast?.forecastday[2]?.day?.condition?.icon} alt="icon"/>
        </h6>
      </div>
    </div>
  );
};

export default Weather;
