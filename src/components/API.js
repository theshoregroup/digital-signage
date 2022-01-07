import { useEffect, useState } from "react";

export const Compost = () => {
  const [apiData, setAPIData] = useState({});
  useEffect(() => {
    const getDataFromApi = async () => {
      const response = await fetch(
        "https://cms.theshoregroup.co.uk/items/posts?access_token=w3vytpbZvEf69LZmiyoNX8h"
      );
      const responseJson = await response.json();
      console.log("json", responseJson);
      setAPIData(responseJson);
    };
    setInterval(getDataFromApi, 5000)
  }, []);

  return (
    <div>
  
    </div>
  );
};


/*
<h6>{apiData?.data[1]?.title}</h6>

*/