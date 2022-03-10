// Main.JS will have three states:
// 1. left - means it will be rendered in left side of the screen
// 2. right - means it will be rendered in right side of the screen
// default - means it will be rendered as the largest element overtop of everything else
import { Graph } from "../subcomponents/Graph";
import YoutubePlayer from "../subcomponents/YoutubePlayer";
import React, { useState, useEffect } from "react";

let delay = 60000

export default function Main(props) {
  let [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      delay
    );
    return () => clearTimeout(intervalId)
  }, []);

  console.log(index);



  // Currently just a switch statement to choose what 'version' of the component to render

  switch (index) {
    case 0:
      return (
        <div className=" ">
          <Graph/>
        </div>
      );
    case 1:
      return (
        <div className="">
       <YoutubePlayer/>
      </div>
      );
 
 

    default:
     setIndex((index)=> 0)
      return (
      null
      );
  }
}
