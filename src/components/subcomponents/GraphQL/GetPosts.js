import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_POSTS } from "./Queries";

export function GetPosts() {
  const { error, loading, data } = useQuery(LOAD_POSTS);

  useEffect(() => {
      console.log(data)
  }, [data]);

  return <div></div>;
}
