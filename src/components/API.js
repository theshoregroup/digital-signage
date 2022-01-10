import { useEffect, useState } from "react";

export const Compost = () => {
  const [apiData, setAPIData] = useState({
    "data": [
        {
            "id": 9,
            "status": "published",
            "sort": null,
            "user_created": "b2f328f3-c74d-4ffd-bbf7-6d0db5d021c0",
            "date_created": "2022-01-07T13:56:32.000Z",
            "user_updated": "b2f328f3-c74d-4ffd-bbf7-6d0db5d021c0",
            "date_updated": "2022-01-07T16:07:28.000Z",
            "title": "version-1",
            "body": "Version 1.0 of the Shore Group Screens App!\n\n\n You can use a handy web app to write basically anything you'd like on these screens.\n\n I'm sure this power will be used responsibly.\n \n \n \n Big up the mainframe massive",
            "availability": "internal"
        },
        {
            "id": 10,
            "status": "published",
            "sort": null,
            "user_created": "b2f328f3-c74d-4ffd-bbf7-6d0db5d021c0",
            "date_created": "2022-01-10T11:21:32.000Z",
            "user_updated": "b2f328f3-c74d-4ffd-bbf7-6d0db5d021c0",
            "date_updated": "",
            "title": "",
            "body": "",
            "availability": ""
        }
    ]
});
  useEffect(() => {
    const getDataFromApi = async () => {
      const response = await fetch(
        "https://cms.theshoregroup.co.uk/items/posts?access_token=w3vytpbZvEf69LZmiyoNX8h"
      );
      const responseJson = await response.json();
      console.log("json", responseJson);
      setAPIData(responseJson);
    };
    setInterval(getDataFromApi, 1500)
   
  }, []);



  return (
    <div>
    <div className="text-5xl font-semibold">
     <h6>{apiData?.data[1]?.title}</h6>
     </div>
     <div className="text-2xl">
     <h6>{apiData?.data[1]?.body}</h6>
     </div>
     <div className="text-xl font-semibold text-center-left">
       <h6>-{apiData?.data[1].posted_by}</h6>
     </div>
     </div>
    
  );
};


/*
<h6>{apiData?.data[1]?.title}</h6>

*/