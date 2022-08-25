// export default function Player() {
//   return (
//     <video controls autoPlay>
//       <source
//         src={"http://192.168.50.105:8088/hls/stream.m3u8"}
//         type="application/x-mpegURL"
//       />
//     </video>
//   );
// }
// @ts-nocheck

import "plyr/dist/plyr.css";

import { useEffect, useRef } from "react";

import Hls from "hls.js";
import Plyr from "plyr";

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.controls = false;
    const options = {
      muted: true,
      autoplay: true,
    };
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // This will run in safari, where HLS is supported natively
      video.src = src;
    } else if (Hls.isSupported()) {
      // This will run in all other modern browsers
      const hls = new Hls();
      hls.loadSource(src);
      const player = new Plyr(video, options);
      hls.attachMedia(video);
    } else {
      console.error(
        "This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API"
      );
    }
  }, [src, videoRef]);

  return (
    <>
      <video ref={videoRef} />
      <style jsx>{`
        video {
          max-width: 100%;
        }
      `}</style>
    </>
  );
}
