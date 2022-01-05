import CompanyPost from "./CompanyPost";
import YouTubePlayer from "./YouTubePlayer";
import { useState } from "react";



function RenderView() {
  let [render, setRender] = useState("youtube");
  console.log(render)

  switch (render) {
    case "youtube":
      return <YouTubePlayer />;
    case "compost":
      return <CompanyPost />;
    default:
      return <YouTubePlayer />;
  }
  
}

export default RenderView;
