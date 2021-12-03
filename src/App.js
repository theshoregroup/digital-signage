import Weather from "./components/Weather";
import Clock from "./components/Clock";
//import "./App.css";
import logo from "./images/shoreLogo.png";
import News from "./components/News";
import RenderView from "./components/RenderView";
import Marquee from "react-fast-marquee";
import bg from './images/bg_test.png';

function App() {
  return (
    <div className="grid grid-cols-9 grid-rows-9 gap-5 bg-shoreblue-500">
      
      <div className="col-span-3 row-span-9 text-white">
        <img src={logo} alt="" />
        <Weather />
      </div>

      <div className="col-span6 row-span-6 text-7xl text-white ">
        <RenderView />
        <Clock />
      </div>

      <div className="absolute bottom-0 left-0 text-6xl text-white bg-gradient-to-br from-blue-400 to-cyan-500">
        <h1>Guardian </h1>
      </div>

      <div className="absolute bottom-0 left-60 text-6xl text-white">
    
          <News />
        
      </div>
    </div >
  );
}

export default App;
