import Weather from "./components/Weather";
import Clock from "./components/Clock";
//import "./App.css";
import logo from "./images/shoreLogo.png";
import News from "./components/News";
import RenderView from "./components/RenderView"



function App() {
  return (
    <div>
      <div className="absolute top-0 right-0 center p-9 shadow-md ">
        <RenderView/>
      </div>

      <div className="absolute top-0 right-0 opacity-70 p-10 ">
        <img src={logo} alt="" />
      </div>
      <div className="absolute bottom-20 right-0 text-7xl ">
        <Clock />
      </div>
      <div className="absolute top-0 left-20 ">
        <Weather />
      </div>
      <div className= "absolute bottom-0 left-0 text-6xl w-screen h-auto">
        <News/>
      </div>
    </div>
  );
}

export default App;
