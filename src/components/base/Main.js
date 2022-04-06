// 6.4.2021
// Main component handles what is rendered in the center of the screen
//
import { Graph } from "../subcomponents/Graph";
import YoutubePlayer from "../subcomponents/YoutubePlayer";
import React, { useState, useEffect } from "react";

//decides how long element stays on screen
let delay = 50000;

export default function Main(props) {
  let [index, setIndex] = useState(0);

  //index incrememnts automatically.
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), delay);
    return () => clearTimeout(intervalId);
  }, []);

  console.log(index);

  // Currently just a switch statement to choose what 'version' of the component to render

  switch (index) {
    case 0:
      return (
        <div className=" ">
          <Graph />
        </div>
      );
    case 1:
      return (
        <div className="">
          <YoutubePlayer />
        </div>
      );

    default:
      setIndex((index) => 0);
      return null;
  }
}
