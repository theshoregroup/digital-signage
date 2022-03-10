// Imports for components
import Main from "./components/base/Main";
import Header from "./components/base/Header";
// import Bottom from "./components/base/Bottom";
import logo from "./images/shoreLogo.png";
import React from "react";
import News from "./components/subcomponents/tempNews";

import { Anim } from "./components/subcomponents/posts";

// What this file does
// This is the main view of the App.
// Handle the look and feel of all subcomponents *partially implmented*

function App() {
  return (
    <>
      {/* Main content wrapper */}
      <div className="h-screen w-screen grid grid-cols-9 grid-rows-9 max-w-screen max-h-screen bg-gradient-to-bl from-gray-900  to-black p-5 ">
        {/* Header */}
        <div className="col-span-7 row-start-1 p-4 text-white font-display">
          <Header location="Brighton" />
        </div>

        {/*LOGO*/}
        <div className="col-span-2    ">
          <img src={logo} alt="logo" height="220" width="220"></img>
        </div>

        {/* Main-Left */}
        <div className="col-span-6 text-white">
          <Main />
        </div>

        {/* Main-Right Element */}
        <div className="col-start-7 col-span-3  text-center text-3xl text-white font-display">
          <Anim />
        </div>

        {/*Bottom-left element*/}
        <div className="col-start-1 col-span-9  text-4xl text-white font-display ">
          <News />
        </div>
      </div>
    </>
  );
}

export default App;
