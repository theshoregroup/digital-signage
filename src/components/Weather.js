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
    <div className="inline-flex-col text-center justify-center p-8">
      <div className="text-xl p-14 shadow-md bg-white rounded-full items-center">
        <img src={data?.current?.condition?.icon} alt="icon" />
        <div className="text-3xl">
          <h6>{data?.location?.name}</h6>
        </div>
        <div className="text-5xl">{data?.current?.temp_c}°C</div>

        <div className="text-3xl">{data?.current?.condition?.text}</div>

        <h6></h6>
      </div>
  </div>
  );
};

export default Weather;


/*    <div className="text-xl p-14 shadow-md bg-gradient-to-br from-red-400 to-cyan-500 rounded-full items-center">
<h6>
<img
 / src={data?.forecast?.forecastday[1]?.day?.condition?.icon}
  alt="icon"
/>
{data?.forecast?.forecastday[1]?.date},
{data?.forecast?.forecastday[1]?.day?.avgtemp_c}°C,
{data?.forecast?.forecastday[1]?.day?.condition?.text},
</h6>
</div>
<div className="text-xl p-14 shadow-md bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full items-center">
<h6>
<img
  src={data?.forecast?.forecastday[2]?.day?.condition?.icon}
  alt="icon"
/>
{data?.forecast?.forecastday[2]?.date},
{data?.forecast?.forecastday[2]?.day?.avgtemp_c}°C,
{data?.forecast?.forecastday[2]?.day?.condition?.text},
</h6>
</div>
</div>*/