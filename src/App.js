// Imports for components
import Main from "./components/base/Main";
import Header from "./components/base/Header";
// import Bottom from "./components/base/Bottom";
import logo from "./images/shoreLogo.png";
import React from "react";
import News  from "./components/subcomponents/tempNews";
import { Sheet } from "./components/subcomponents/Sheet";
import { Anim } from "./components/subcomponents/posts";
import { GetPosts } from "./components/subcomponents/GraphQL/GetPosts";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GRAPHQL ERROR ${message}`);
    });
  }
});


  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
  };


const link = from([
  errorLink, 
  new HttpLink({
    uri: "https://tsgcms.azurewebsites.net/api/graphql/", config
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

// What this file does
// This is the main view of the App.
// Handle the look and feel of all subcomponents *partially implmented*

export default function App() {
  return (
    <ApolloProvider client={client}>

      {/* Main content wrapper */}
      <div className="h-screen w-screen grid grid-cols-9 grid-rows-9 max-w-screen max-h-screen bg-gradient-to-b from-gray-900  to-black ">
        {/* Header */}
        <div className="col-span-9 row-start-1 p-4 text-white font-display">
          <Header location="Brighton" />
        </div>



        {/* Main-Left */}
        <div className="col-span-6 text-white">
          <Main />
        </div>

        {/* Main-Right Element */}
        <div className="col-start-7 col-span-3  text-center text-3xl text-white font-display p-10">
          <Anim />
        </div>

        {/*Bottom-left element*/}
        <div className="col-start-1 col-span-9  text-4xl text-white font-display ">
          <News />
        </div>
      </div>
    </ApolloProvider>
  );
}


