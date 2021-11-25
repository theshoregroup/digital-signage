import CompanyPost from './CompanyPost';
import YouTubePlayer from "./YouTubePlayer";


function RenderView(render) {
    setInterval(render, 5000);
    switch(render) {
        case 'yt':
            return (
                <YouTubePlayer/>
            )
        case 'cp':
            return (
                <CompanyPost/>
            )
        default:
            return(
                <YouTubePlayer/>
            )

    }
}



export default RenderView

