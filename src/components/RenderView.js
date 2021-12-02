import CompanyPost from './CompanyPost';
import YouTubePlayer from "./YouTubePlayer";
import React, { useState } from 'react';


function RenderView(render) {
    setInterval(renderTime, 100)
    function renderTime() {
    render = (render == "cp" ? "yt" : "cp")
    }

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

