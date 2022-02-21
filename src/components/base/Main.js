// Main.JS will have three states:
// 1. left - means it will be rendered in left side of the screen
// 2. right - means it will be rendered in right side of the screen
// default - means it will be rendered as the largest element overtop of everything else
import { Graph } from "../Graphs/Graph";
import React, { useState, createContext, useContext } from "react";

export default function Main(props) {
  const initialCounterValue = 0;
  let [index, setIndex] = useState(initialCounterValue);

  const increment = () => {
    setIndex(index + 1);
  };

  const reset = () => {
    setIndex((index = 0));
  };

  setInterval(increment, 90000);

  // Currently just a switch statement to choose what 'version' of the component to render
  console.log(index);
  switch (index) {
    case 0:
      console.log(index);
      return (
        <div className="h-full w-full  ">
          <Graph state="menWorkingByDept" />
        </div>
      );
    case 1:
      console.log(index);
      return (
        <div className="h-full w-full ">
          <Graph state="mne" />
        </div>
      );
    case 2:
      console.log(index);
      return (
        <div className="h-full w-full ">
          <Graph state="construction" />
        </div>
      );
    case 3:
      console.log(index);
      return (
        <div className="h-full w-full ">
          <Graph state="fitout" />
        </div>
      );

    case 4:
      return (
        <div className="h-full w-full  ">
          <iframe
            width="1280"
            height="555"
            className=""
            src="https://www.youtube.com/embed/9Auq9mYxFEE?autohide=1&autoplay=1&cc_load_policy=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            autoPlay="True"
          />
        </div>
      );
    default:
      reset();
  }
}
