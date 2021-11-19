import { useEffect, useState } from "react";

const News = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getNewsFromApi = async () => {
      const response = await fetch(
        "https://content.guardianapis.com/search?api-key=1d485923-6ad7-40a1-b072-c5088d248d0d"
      );
      const responseJson = await response.json();
      console.log("json", responseJson);
      setData(responseJson);
    };
    getNewsFromApi();
  }, []);
  

  return (
    <h1></h1>
  )
}
