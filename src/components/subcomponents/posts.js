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
          "Bearer ade8861266b7a17189efa08eb21f9acfb4938b7290b0a26480e99a610d219bacd5e24cf0945b7c0e36c0e24e31c6e5ec6523a9a2564a89e1510f73d42958f7efeb7aac7867ae68bf30794397aaed10888e96c804a5aeb60810225592240f0111661c992f1da85ffea2f849244faa92106db77ebb4a1e8d8fc0f6a4e8e94c1514",
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
 
  console.log(body);
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

