import Weather from "./components/Weather";
import YouTubePlayer from "./components/YouTubePlayer";
import Clock from "./components/Clock";
import "./App.css";
import logo from "./images/shoreLogo.png";
import Marquee from "react-fast-marquee";
import SkyNews from "./components/Skynews";

function App() {
  return (
    <div>
      <div className="absolute top-0 right-0 center p-9 shadow-md ">
        <YouTubePlayer
          query="9Auq9mYxFEE"
          params="?autoplay=1&mute=1&cc_load_policy=1&disablekb=1&fs=0&modestBranding=1"
        />
      </div>

      <div className="absolute top-0 right-0 opacity-70 p-10 ">
        <img src={logo} alt="" />
      </div>
      <div className="absolute bottom-0 right-0 text-7xl p-6 shadow-md">
        <Clock />
      </div>
      <div className="absolute top-0 left-20 ">
        <Weather />
      </div>
      <div className="absolute bottom-0 text-6xl p-6 shadow-md">
        <Marquee gradientColor speed="90">
          <SkyNews/>
        </Marquee>
      </div>
    </div>
  );
}

export default App;
