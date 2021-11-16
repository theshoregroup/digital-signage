import Weather from "./components/Weather";
import YouTubePlayer from "./components/YouTubePlayer";
import Clock from "./components/Clock";
import "./App.css";
import logo from "./images/shoreLogo.png";
import Marquee from "react-fast-marquee";
import { comment } from "postcss";

  



function App() {
  

  return (

    <parent>
      <div className="absolute top-0 right-0 center p-10">
        <YouTubePlayer
          query="9Auq9mYxFEE"
          params="?autoplay=1&mute=1&cc_load_policy=1&disablekb=1&fs=0&modestBranding=1"
        />
      </div>
      
      <div className="absolute top-0 right-0 opacity-60 ">
        <img src={logo} alt="" />
      </div>
      <div className="absolute bottom-0 right-0 text-6xl">
        <Clock />
      </div>
      <div className="absolute top-0 left-20 text-4xl p-14">
        <Weather/>
      </div>
      <div className="absolute bottom-0 text-6xl">
        <Marquee gradientColor speed="90">
          IMPORT SKY NEWS RSS FEED
        </Marquee>
        
        
      </div>
    </parent>
  );
}

export default App;
