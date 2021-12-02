import CompanyPost from './CompanyPost';
import YouTubePlayer from "./YouTubePlayer";
import React, { useState } from 'react';


function RenderView(render) {
    function renderTime() {
        render = (render == "cp" ? "yt" : "cp")
        }
    setInterval(renderTime, 1000)
  

    switch (render) {
        case 'yt':
            return (
                <YouTubePlayer />
            )
        case 'cp':
            return (
                <CompanyPost />
            )
        default:
            return (
                <YouTubePlayer />
            )

    }
}






export default RenderView

