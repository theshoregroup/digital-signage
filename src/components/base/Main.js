// Main.JS will have three states:
// 1. left - means it will be rendered in left side of the screen
// 2. right - means it will be rendered in right side of the screen
// default - means it will be rendered as the largest element overtop of everything else
import { Graph } from "../Graphs/Graph";
import React, { useState } from "react";

let index = 1 // CHANGE SOON

 export function Main(props) {
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
    
        return (
          <div className="h-full w-full ">
            <Graph state="fitout" />
          </div>
        );
      case 4:
      
        return (
          <div className="h-full w-full ">
            <Graph state="fitout" />
          </div>
        );
  

      default:
       
        return (
          <div className="h-full w-full px-10 ">
            <iframe
              width="1000"
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
    }
  }


