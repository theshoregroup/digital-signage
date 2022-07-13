// import { useCallback, useEffect, useState } from "react";
// import videojs from "video.js";

// function VideoPlayer(props) {
//   const [videoEl, setVideoEl] = useState(null);
//   const onVideo = useCallback((el) => {
//     setVideoEl(el);
//   }, []);

//   useEffect(() => {
//     if (videoEl == null) return;
//     const player = videojs(videoEl, props);
//     return () => {
//       player.dispose();
//     };
//   }, [props, videoEl]);

//   return (
//     <div data-vjs-player>
//       <video
//         ref={onVideo}
//         className="video-js vjs-default-skin vjs-big-play-centered"
//       />
//     </div>
//   );
// }

// export default VideoPlayer;
