// Old import statements to be brought over to new elements
// import Weather from "./components/Weather";
// import Clock from "./components/Clock";
// //import "./App.css";
// import logo from "./images/shoreLogo.png";
// import News from "./components/News";
// import RenderView from "./components/RenderView";
// import Marquee from "react-fast-marquee";

// Imports for components
import Header from "./components/base/Header";

function App() {
  return (
    <>
      {/* Main content wrapper */}
      <div className="h-screen w-screen grid grid-cols-3 grid-rows-6">

        {/* Header */}
        <div className="col-span-2">
          <Header location="Brighton"/>
        </div>
        
        {/* Main-Left */}
        <div className="col-span-2 row-span-4 row-start-2">
          
        </div>

        {/* Main-Right Element */}
        <div className="col-start-3 row-span-5">
          
        </div>

        {/* Bottom Element */}
        <div className="col-span-3 row-start-6">
          
        </div>
      </div>
    </>
  )
}

export default App;
