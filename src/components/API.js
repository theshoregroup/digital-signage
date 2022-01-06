import { useEffect, useState } from "react";

const Compost = () => {
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
    getDataFromApi();
  }, []);

  return (
    <div>
       <h6>{apiData?.data[1]?.title}</h6>
       <h6>{apiData?.data[2]?.title}</h6>
       <h6>{apiData?.data[1]?.id}</h6>
       


    </div>
  );
};

export default Compost;
