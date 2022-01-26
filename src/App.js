// Old import statements to be brought over to new elements
// import Weather from "./components/Weather";
// import Clock from "./components/Clock";
// //import "./App.css";
// import logo from "./images/shoreLogo.png";
// import News from "./components/News";
// import RenderView from "./components/RenderView";
// import Marquee from "react-fast-marquee";

// Imports for components
import Main from "./components/base/Main";
import Header from "./components/base/Header";
// import Bottom from "./components/base/Bottom";
import logo from "./images/shoreLogo.png";
import { Graph } from "./components/subcomponents/Graph";
import News from "./components/subcomponents/tempNews";

import { Anim } from "./components/subcomponents/posts";
import SalesReport from "./components/subcomponents/SalesReport";

// What this file does
// This is the main view of the App.
// Handle the look and feel of all subcomponents *partially implmented*
// Pull data from database to push down to components *not yet implmented*
// Set background *not yet implmented*
// Check to see if app is connected to backend *not yet implmented*
// Display other views (like setup / device Health / device Status / device Health) if various perameters are met *not yet implmented*

function App() {
  return (
    <>
      {/* Main content wrapper */}
      <div className="h-screen w-screen grid grid-cols-9 grid-rows-6 max-w-screen max-h-screen bg-gradient-to-l from-gray-900  to-black">
        {/* Header */}
        <div className="col-span-6 row-start-1 p-4 text-white font-display">
          <Header location="Brighton" />
        </div>


        {/*LOGO*/}
        <div className="col-span-3 col-start-8 row-span-1  ">
          <img src={logo} alt="logo" height="220" width="220"></img>
        </div>

        {/* Main-Left */}
        <div className="col-span-6 row-span-4 p-10 ">
          <Main state="1" />
        </div>

        {/* Main-Right Element */}
        <div className="col-start-7 col-span-3  p-10 text-center text-2xl text-white font-display">
          <h1>-</h1>
          <Anim />
        </div>

        {/*Bottom-left element*/}
        <div className="col-start-1 col-span-6 row-start-6 text-3xl p-10 text-white font-display ">
          <News />
        </div>

        {/* Bottom-Right Element */}
        <div className="  col-start-8 row-start-5 text-white font-display text-3xl">
          <SalesReport />
        </div>
      </div>
    </>
  );
}

export default App;
