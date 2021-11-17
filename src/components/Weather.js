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
    <div className="text-2xl p-14 shadow-md bg-gradient-to-br from-green-400 to-cyan-500">
      <h6>{data?.location?.name}</h6>
      <h6>Today</h6>
      <h6>
        {" "}
        {data?.current?.temp_c}°C, {data?.current?.condition?.text},{" "}
        {data?.current?.wind_mph}mph
        {data?.forecast?.forecastday?.day?.text}
        </h6>
      
    </div>
  );
};

export default Weather;
