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
import Bottom from "./components/base/Bottom";
import logo from "./images/shoreLogo.png";
import Compost from "./components/API";

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
      <div className="h-screen w-screen grid grid-cols-3 grid-rows-6">
        {/* Header */}
        <div className="col-span-2">
          <Header location="Brighton" />
        </div>

        {/*logo*/}
        <div className="col-span-1 ">
          <img src={logo} alt="" />
        </div>

        {/* Main-Left */}
        <div className="col-span-2 row-span-4 row-start-2">
          <Main state="left" />
        </div>

        {/* Main-Right Element */}
        <div className="col-start-3 row-span-6 text-center ">
          <h1> COMPANY POSTsdsS</h1>
          <Compost/>

        </div>

        {/* Bottom Element */}
        <div className="col-span-2 row-start-6">
          <Bottom />
        </div>
      </div>
    </>
  );
}

export default App;
