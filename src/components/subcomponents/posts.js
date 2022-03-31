//ANIMATION TEST
import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { Loader } from "../functional/Loader";
import { useQuery, gql } from "@apollo/client";
import { LOAD_POSTS } from "../subcomponents/GraphQL/Queries";

export const Anim = () => {
  const { error, loading, data } = useQuery(LOAD_POSTS, {
    pollInterval: 1000,
  });
  const [index, setIndex] = useState(0);
  const [body, setBody] = useState([]);


  //FIX USEEFFECT
  useEffect(() => {
    if (index <= 1) {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        5000 // 10 seconds
      );
      return () => clearTimeout(intervalId);
    }
    else {
      setIndex((index)=> 0)
    }
  }, [index]);

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  else {
    let body = data.posts[index].content.document.map((document) =>
      document.children.map((children) => children.text))
  
 
    
    console.log(body)
    return <h1 className="fade-in-down">{body.join(" ")}</h1>;
  }
};
