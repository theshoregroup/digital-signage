// Main.JS will have three states:
// 1. left - means it will be rendered in left side of the screen
// 2. right - means it will be rendered in right side of the screen
// default - means it will be rendered as the largest element overtop of everything else
import { Graph } from "../subcomponents/Graph";


export default function MainComponent(props) {
    // Currently just a switch statement to choose what 'version' of the component to render


    switch (props.state) {
        case '0':
            return (
                <div className="h-full w-full p-5">
                    <iframe
                      width="1050"
                      height="591"
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
        case '1':
            return (
                <div className="h-full w-full">
                 <Graph/>
                </div>
            );
        default:
            return (
                <div className="h-screen w-screen f">
                </div>
            );
    }
}