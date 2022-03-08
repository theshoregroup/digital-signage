//ANIMATION TEST
import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { Loader } from "../functional/Loader";

export const Anim = () => {
  const [index, setIndex] = useState(0);
  let [loader, setLoader] = useState(true);
  let [data, setData] = useState();

  useEffect(() => {
    const config = {
      headers: {
        Authorization:
         process.env.REACT_APP_BACKEND_API_KEY,
      },
    };

    const getPostsFromApi = async () => {
      const response = await fetch("http://localhost:1337/api/posts", config);
      const responseJson = await response.json();
      console.log("json", responseJson);
      setData(responseJson);
      setLoader(false);
    };
    setTimeout(getPostsFromApi, 3000)
  }, []);

  console.log(data);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      25000 // 20 seconds i think
    );
    return () => clearTimeout(intervalId);
  }, []);

  if (loader === true) {
    return <Loader />;
  } else 
  var body = data.data.map((post) => post.attributes.Body);
 

  return (
    <h1 className=" text-center">
    
    <TextTransition
      className="text-3xl"
      text={body[index % body.length]}
      springConfig={presets.wobbly}
    />
  </h1>
  )
};

