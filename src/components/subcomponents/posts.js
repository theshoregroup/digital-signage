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
  //limit ensures index is never higher than the amount of posts available from the CMS. Set to one as setting it to 0 means the loop doesnt initiate.
  let limit = 1;
  //Index keeps track of which post is being displayed. Set state to limit
  const [index, setIndex] = useState(limit);

  //Index is decremented within useEffect hook
  useEffect(() => {
    //initiate loop
    if (index > 0) {
      const intervalId = setInterval(
        () => setIndex((index) => index - 1),
        10000 // post displays for 10 seconds
      );
      return () => clearTimeout(intervalId);
    }
    //reset loop
    else {
      setIndex(limit);
    }
  }, [index, limit]);

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  else {
    //set limit only if posts have been successfully pulled.
    limit = data.posts.length - 1;
    //map posts to array
    let title = data.posts[index].title;
    let body = data.posts[index].content.document.map((document) =>
      document.children.map((children) => children.text)
    );

    console.log(body);
    console.log(limit);
    console.log(index);
    console.log(data);
    //render
    return (
      <div>
        <h1 className="font-semibold text-4xl">{title}</h1>
        <h1 className="fade-in-down">{body.join(" ")}</h1>
      </div>
    );
  }
};
