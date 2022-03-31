import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_POSTS } from "./Queries";
import { Loader } from "../../functional/Loader";
import TextTransition, { presets } from "react-text-transition";



export const GetPosts = () => {
  const { error, loading, data } = useQuery(LOAD_POSTS);
  const { index, setIndex } = useState(0);
  
  

   

   
  useEffect(() => {
    console.log(data);
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // 30 seconds
    );
    return () => clearTimeout(intervalId);
  });

  if (loading === true) {
    return <Loader />;
  } else 
  var text = (data.posts.map((post) => post.title));
  var body = (data.posts.map((post) => post.content.document.map((document) => document.children.map((children)=> children.text))));
  return (
    <h1 className=" text-center text-white">
   {text}
   {body}
    </h1>
  );
}
