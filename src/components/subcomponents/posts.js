//Pulls posts from CMS
//Displays posts one at a time on a loop.
//KNOWN ISSUES - first post on the CMS doesn't display. Index logic needs to be rewritten to allow an index of 0 without causing an error.

import React, { useEffect, useState } from "react";
import { Loader } from "../functional/Loader";
import { useQuery } from "@apollo/client";
import { LOAD_POSTS } from "../subcomponents/GraphQL/Queries";

export const Anim = () => {
  const { error, loading, data } = useQuery(LOAD_POSTS, {
    //polls for updates every second
    pollInterval: 1000,
  });
  //limit ensures index is never higher than the amount of posts available from the CMS.
  let limit = 0;
  //Index keeps track of which post is being displayed. Set state to limit
  const [index, setIndex] = useState(limit);
  

  //Index is decremented within useEffect hook
  useEffect(() => {
    if (index <= 0 ) {
      setIndex(limit);
   
    } else {
      const intervalId = setInterval(
        () => setIndex((index) => index - 1),
        10000 // post displays for 10 seconds
      );
      return () => clearTimeout(intervalId);
    }
  }, [index, limit]);

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  else {
    //set limit only if posts have been successfully pulled.
    limit = data.posts.length -1
    //map posts to array
    let body = data.posts[index].content.document.map((document) =>
      document.children.map((children) => children.text)
    );
console.log(body)
console.log(limit)
console.log(index)
   //render
    return <h1 className="fade-in-down">{body.join(" ")}</h1>;
  }
};
