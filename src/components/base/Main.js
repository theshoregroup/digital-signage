// Main.JS will have three states:
// 1. left - means it will be rendered in left side of the screen
// 2. right - means it will be rendered in right side of the screen
// default - means it will be rendered as the largest element overtop of everything else
import { Graph } from "../subcomponents/Graph";
import React, { useState, useEffect } from "react";

let delay = 20000

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
        <div className="h-full w-full  ">
          <Graph state="menWorkingByDept" />
        </div>
      );
    case 1:
      return (
        <div className="h-full w-full ">
          <Graph state="mne" />
        </div>
      );
    case 2:
      return (
        <div className="h-full w-full ">
          <Graph state="construction" />
        </div>
      );
    case 3:
      return <Graph state="fitout" />;
    case 4:
      return <Graph state="newRegionsMVB" />;
    case 5:
      return <Graph state="mAndEMVB" />;
    case 6:
      return <Graph state="constructionMVB" />;
    case 7:
      return <Graph state="fitOutMVB" />;
    case 8:
      return <Graph state="logisticsMVB" />;
    case 9:
      return <Graph state="retailMVB" />;

    default:
      setTimeout(setIndex((index)=> 0), delay)
      return (
        <div className="h-full w-full  ">
          <iframe
            width="1040"
            height="585"
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
  }
}
