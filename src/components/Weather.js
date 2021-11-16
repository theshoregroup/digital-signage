import { useEffect, useState } from "react";

const Weather = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getWeatherFromApi = async () => {
      const response = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=ac517e0edf3142a6ae282635211410&q=BN1&aqi=no"
      );
      const responseJson = await response.json();
      console.log("json", responseJson);
      setData(responseJson);
    };
    getWeatherFromApi();
  }, []);

  return (
    <div className="App">
      <h6>{data?.location?.name}, {data?.current?.temp_c}°C</h6>
 

    </div>
  );
};

export default Weather;

      
