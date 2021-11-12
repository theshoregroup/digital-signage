//import Weather from "./components/Weather";
import YouTubePlayer from "./components/YouTubePlayer";
import Clock from "./components/Clock";
import "./App.css";
import logo from "./images/shoreLogo.png";
import Marquee from "react-fast-marquee";

function App() {
  return (
    <parent>
      <div className="absolute top-0 left-0 p-8">
        <YouTubePlayer
          query="9Auq9mYxFEE"
          params="?autoplay=1&mute=1&cc_load_policy=1&disablekb=1&fs=0&modestBranding=1"
        />
      </div>
      <div className="absolute top-0 right-0 p-14 text-center text-2xl">
        <img src={logo} alt="" />
        <h1> ADD COMPANY POSTS</h1>
        <h1> |</h1>
        <h1> |</h1>
        <h1> |</h1>
        <h1> |</h1>
        <h1> |</h1>
        <h1> |</h1>
        <h1> |</h1>
        <h1> |</h1>
        <h1> |</h1>
        <h1> ADD COMPANY POSTS</h1>
      </div>
      <div className="flexbox flex-right absolute bottom-0 right-0 text-2xl p-12">
           <Clock />
        <h1>IMPORT WEATHER</h1>
      </div>
      <div className="absolute bottom-0 text-2xl">
        <Marquee gradientColor speed="90">
          IMPORT SKY NEWS RSS FEED
        </Marquee>
      </div>
    </parent>
  );
}

export default App;
