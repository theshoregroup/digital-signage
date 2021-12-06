import Weather from "./components/Weather";
import Clock from "./components/Clock";
//import "./App.css";
import logo from "./images/shoreLogo.png";
import News from "./components/News";
import RenderView from "./components/RenderView";
import Marquee from "react-fast-marquee";

function App() {
  return (
    <div className="max-w-screen max-h-screen grid grid-cols-9 grid-rows-9 min-w-screen min-h-screen p-10 gap-10 bg-shoreblue-500">
      <div className="col-span-2 row-span-1 text-white ">
        <img src={logo} alt="" />
      </div>
      <div className="col-span-7 row-span-3 text-7xl gap-3 bg-white  max-w-auto max-h-16 ">
        <RenderView />
     
      </div>
      <div className="col-span-2 row-span-7 text-6xl  ">
        <Weather />
      </div>
      <div className="col-span-3 row-span-7 text-8xl  ">
        <Clock />
      </div>
      <div className="col-span-6 row-span-7 text-8xl  ">
      <News />
      </div>
    </div>
  );
}

export default App;
