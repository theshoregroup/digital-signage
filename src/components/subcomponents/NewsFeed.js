// NEWS FEED
// 6.4.2021
// Queries Bing News Search API
// Maps results to array and renders as a scrolling news feed

import axios from "axios";
import { Loader } from "../functional/Loader";
import React, { useState, useEffect } from "react";

// define HTTP header
const header = {
  headers: {
    "Ocp-Apim-Subscription-Key": process.env.REACT_APP_BING_API_KEY,
  },
};

export const News = () => {
  let [loader, setLoader] = useState(true);
  let [data, setData] = useState();
 
 
//Calls Bing News Search API
  useEffect(()=> {
    axios
    .get(
          "https://api.bing.microsoft.com/v7.0/news/search?count=100",
          header
        )
      .then((response) => {
        //Maps news headlines to array
        var headlines = response.data.value.map((articles) => {
          return articles.name;
        });
        // "seperate headlines "
        var joined = headlines.join(" - "); 
        //Update state with headlines
        setData(joined);
        console.log(data);

     
      })
      .catch((error) => console.log(error.response));

    //Disables loader
    setLoader(false);
  }, [data])
  
//Loader 
  if (loader === true) {
    return (
      <div>
        <div className="text-semibold "> News </div> <Loader />
      </div>
    );
  } 
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
