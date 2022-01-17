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
import Header from "./components/base/Header"
// import Bottom from "./components/base/Bottom";
import logo from "./images/shoreLogo.png";
import { Sonos } from "./components/Sonos"
import { Compost } from "./components/API"
import News from "./components/tempNews";
import ExcelPage from "./components/ExcelTest/ExcelTest";
import MainComponent from "./components/base/Main";




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
      <div className="h-screen w-screen grid grid-cols-9 grid-rows-6 gap-2 p-5 max-w-screen max-h-screen ">
        {/* Header */}
        <div className="col-span-7 row-start-1">
          <Header location="Brighton" />


        </div>

        {/*LOGO*/}
        <div className="col-span-2 ">
          <img src={logo} alt="logo" height="128" width="300"></img>
        </div>

        {/* Main-Left */}
        <div className="col-span-6 row-span-4 row-start-2">
         <Main state="left"/>
        </div>

        {/* Main-Right Element */}
        <div className="col-span-3 row-span-3">
        <ExcelPage/>
        </div>

        {/* Bottom-Right Element */}
        <div className="col-span-3 row-start-5 row-span-2">
          <Sonos />
        </div>

        {/*Bottom-left element*/}
        <div className="col-start-1 col-span-6" >
          <News />
        </div>


      </div>
    </>
  );
}

export default App;
