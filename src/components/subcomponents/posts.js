//ANIMATION TEST
import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { Loader } from "../functional/Loader";
import { useQuery, gql } from "@apollo/client";
import { LOAD_POSTS } from "../subcomponents/GraphQL/Queries";

export const Anim = () => {
  const { error, loading, data } = useQuery(LOAD_POSTS);
  const [index, setIndex] = useState(0);
  const [body, setBody] = useState();

  useEffect(() => {
    while (index <= 1) {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        5000 // 10 seconds
      );
      return () => clearTimeout(intervalId);
    }
  }, []);

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  else {
    var text = data.posts[0].content.document.map((document) =>
      document.children.map((children) => children.text)
    );
    return <h1>{text}</h1>;
  }
};
