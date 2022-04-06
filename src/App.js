// Imports for components
import Main from "./components/base/Main";
import Header from "./components/base/Header";
import React from "react";
import { News } from "./components/subcomponents/NewsFeed";
import { Anim } from "./components/subcomponents/posts";
import Weather from "./components/subcomponents/Weather";
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
    //eslint-disable-next-line
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GRAPHQL ERROR ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://tsgcms.azurewebsites.net/api/graphql/",
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
      <div className="h-screen w-screen grid grid-cols-9 grid-rows-9 max-w-screen max-h-screen bg-gradient-to-b from-gray-900  to-black text-white font-display ">
        {/* Header */}
        <div className="col-span-3 row-start-1 p-4 text-white font-display">
          <Header location="Brighton" />
        </div>

        <div className="col-span-6 text-center">
          <Weather />
        </div>

        {/* Main-Left */}
        <div className="col-span-6 ">
          <Main />
        </div>

        {/* Main-Right Element */}
        <div className="col-start-7 col-span-3 text-center text-3xl  p-10">
          <Anim />
        </div>

        {/*Bottom-left element*/}
        <div className="col-start-1 col-span-9  text-4xl  ">
          <News />
        </div>

        
      </div>
    </ApolloProvider>
  );
}
