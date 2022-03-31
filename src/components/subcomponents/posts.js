//Pulls posts from CMS
//Displays posts one at a time on a loop.

import React, { useEffect, useState } from "react";
import { Loader } from "../functional/Loader";
import { useQuery } from "@apollo/client";
import { LOAD_POSTS } from "../subcomponents/GraphQL/Queries";

export const Anim = () => {
  const { error, loading, data } = useQuery(LOAD_POSTS, {
    //polls for updates every second
    pollInterval: 1000,
  });
  //Index keeps track of which post is being displayed
  const [index, setIndex] = useState(0);
  //limit ensures index is never higher than the amount of posts available from the CMS.
  let limit = 0;

  //Index is incremented within useEffect hook
  useEffect(() => {
    if (index <= limit) {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        10000 // post displays for 10 seconds
      );
      return () => clearTimeout(intervalId);
    } else {
      setIndex((index) => 0);
    }
  }, [index, limit]);

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  else {
    console.log(data.posts);
    limit = data.posts.length -2
    let body = data.posts[index].content.document.map((document) =>
      document.children.map((children) => children.text)
    );

    console.log(data.posts.length);
    return <h1 className="fade-in-down">{body.join(" ")}</h1>;
  }
};
