import axios from "axios";

import { Loader } from "../functional/Loader";
import React, { useState, useEffect } from "react";

const header = {
  headers: {
    "Ocp-Apim-Subscription-Key": process.env.REACT_APP_BING_API_KEY,
  },
};

export const News = () => {
  let [loader, setLoader] = useState(true);
  let [data, setData] = useState();
 
 

  useEffect(()=> {
    axios
    .get(
          "https://api.bing.microsoft.com/v7.0/news/search?count=100",
          header
        )
      .then((response) => {
        var headlines = response.data.value.map((articles) => {
          return articles.name;
        });
        var joined = headlines.join(" - "); // "seperate headlines "
        setData(joined);
        console.log(data);

     
      })
      .catch((error) => console.log(error.response));


    setLoader(false);
  }, [data])
  

  if (loader === true) {
    return (
      <div>
        <div className="text-semibold "> News </div> <Loader />
      </div>
    );
  } //get articles titles as "headlines"
  else
    return (
      <div>
        <div className="text-semibold"> News - </div>
        {/* eslint-disable-next-line jsx-a11y/no-distracting-elements*/}
        <marquee className="text-5xl" scrollamount="10">
          <p className=""> {data} </p>
        </marquee>
      </div>
    );
};
