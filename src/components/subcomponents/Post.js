import { Loader } from "../functional/Loader";
import React, { useEffect, useState } from "react";

export default function Posts(props) {
  let [loader, setLoader] = useState(true);
  let [index, setIndex] = useState(0);
  let [data, setData] = useState();

  const increment = () => {
    setIndex(index + 1);
  };

  const reset = () => {
    setIndex((index = 0));
    console.log(index);
  };

  console.log(index);

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
    };
    setInterval(getPostsFromApi, 10000);
    setLoader(false);
  }, []);

  if (loader === true) {
    return <Loader />;
  } else {
    console.log(data);
    return (
      <div className="text-center text-white">
        <div className="font-semibold text-4xl animate-fade-in-up">
          {data.data.id}
        </div>
        <div className="text-3xl animate-fade-in-down"></div>

        <div className="text-3xl font-semibold"></div>
      </div>
    );
  }
}
