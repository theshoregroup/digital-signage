import CompanyPost from './CompanyPost';
import YouTubePlayer from "./YouTubePlayer";


function RenderView(render) {
<<<<<<< HEAD
    function renderTime() {
        render = (render == "cp" ? "yt" : "cp")
        }
    setInterval(renderTime, 1000)
  

    switch (render) {
=======
    setInterval(render, 5000);
    render = "yt"
    switch(render) {
>>>>>>> parent of ca5c410 (Implemented switching view (its broken though))
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

