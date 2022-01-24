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

import { Compost } from "./components/API";
import News from "./components/tempNews";
import ExcelPage from "./components/ExcelTest/ExcelTest";
import { Anim } from "./components/subcomponents/posts";

// What this file does
// This is the main view of the App.
// Handle the look and feel of all subcomponents *partially implmented*
// Pull data from database to push down to components *not yet implmented*
// Set background *not yet implmented*
// Check to see if app is connected to backend *not yet implmented*
// Display other views (like setup / device Health / device Status / device Health) if various perameters are met *not yet implmented*

let SalesReport = "123,000" //Make own component and editable from backend

function App() {
  return (
    <>
      {/* Main content wrapper */}
      <div className="h-screen w-screen grid grid-cols-9 grid-rows-9 gap-2 p-5 max-w-screen max-h-screen ">
        {/* Header */}
        <div className="col-span-7 row-start-1">
          <Header location="Brighton" />
        </div>

        {/*LOGO*/}
        <div className="col-span-2  ">
          <img src={logo} alt="logo" height="192" width="192"></img>
        </div>

        {/* Main-Left */}
        <div className="col-span-6 row-span-4 row-start-2">
          <Main state="left" />
        </div>

        {/* Main-Right Element */}
        <div className="col-span-3 row-start-3">
         <Compost/>
        </div>

        {/*Bottom-left element*/}
        <div className="col-start-1 col-span-6 text-3xl ">
          <News />
        </div>

        {/* Bottom-Right Element */}
        <div className=" text-center col-start-8 row-start-6">
          <h1 className="font-semibold text-6xl">£{SalesReport}</h1>
          <h2 className="text-3xl">Sales this week</h2>
        </div>
      </div>
    </>
  );
}

export default App;
