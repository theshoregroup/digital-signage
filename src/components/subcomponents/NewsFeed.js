import axios from "axios";

import { Loader } from "../functional/Loader";
import React, { useState, useEffect } from "react";

const header = {
  headers: {
    "Ocp-Apim-Subscription-Key": process.env.REACT_APP_BING_API_KEY,
  },
};

export const News = () => {
  const [index, setIndex] = useState(0);
  let [loader, setLoader] = useState(true);
  let [data, setData] = useState();
  let [urlData, setUrlData] = useState();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: process.env.REACT_APP_BACKEND_API_KEY,
      },
    };

    const getNewsFromApi = async () => {
      axios
        .get("http://localhost:1337/api/news", config)
        .then((response) => {
          console.log(response.data);
          setUrlData(response.data);
          console.log(urlData);
        })
        .then((response) => {
          return axios.get(
            "https://api.bing.microsoft.com/v7.0/news/search" +
              "?q=" +
              urlData.data[index].attributes.Query,

            header
          );
        })
        .then((response) => {
          var headlines = response.data.value.map((articles) => {
            return articles.name;
          });
          var joined = headlines.join(" - "); // "seperate headlines "
          setData(joined);
          console.log(data);

          //compare index to available elements
          console.log(urlData.data.length);
          this.timerID = setInterval(() => this.indexer(), 60000);
        })
        .catch((error) => console.log(error.response));

      setLoader(false);
    };
    getNewsFromApi();
    setInterval(getNewsFromApi, 20000);
  }, [data, index, urlData]);
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
