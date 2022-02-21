import React from "react";
import { render } from "react-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://tsgcms.azurewebsites.net/api/graphql",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetPosts {
        posts {
          id
          title
          content {
            document
          }
        }
      }
    `,
  })

  .then((result) => console.log(result));

  const POSTS = gql`
  query GetPosts {
  posts{
    id
    title
  }
}
`;

function Posts() {
    const { loading, error, data } = useQuery(POSTS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.rates.map(({ title, id }) => (
      <div key={id}>
        <p>
          {title}: {id}
        </p>
      </div>
    ));
  }

export function Postss() {
  return (
    <div>
   
        <h2>My first Apollo app 🚀</h2>
   <Posts/>
    </div>
  );
}


render(
    <ApolloProvider client={client}>
      <Posts />
    </ApolloProvider>,
    document.getElementById("root")
  );
  