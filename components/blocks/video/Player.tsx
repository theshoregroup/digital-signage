// Produces a client-side video player.

import { useEffect } from "react";
import videojs from "video.js";

export default function Player() {
  useEffect(() => {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("Video.js Ready", this);
    });
  });
  return (
    <div data-vjs-player>
      <video
        ref={(node) => (this.videoNode = node)}
        className="video-js"
      ></video>
    </div>
  );
}
