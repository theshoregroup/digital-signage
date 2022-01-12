import React from "react";
import axios from "axios";


const Loader = () => (
  <div class="divLoader">
    <svg class="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
      <path
        stroke="none"
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#51CACC"
        transform="rotate(179.719 50 51)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 51;360 50 51"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
      </path>
    </svg>
  </div>
);

class Sonos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5005/zones").then((res) => {
      let data = res.data;
      console.log(data);
     
      this.setState({ data, loading: false });
      console.log(data);
      
      
    });
  }

  render() {
    return (
      <div>
        {this.state.loading ? <Loader /> : null}
        <table border="1">
          <parent>
            <div className=" text-gray-700 rounded-full items-center text-3xl ">
              <div className="bg-gradient-to-r from-green-400 to-blue-500  ">
                <div className="text-4xl font-semibold"></div>
              
             
              </div>
            </div>
          </parent>
        </table>
      </div>
    );
  }
}

export { Sonos };

/*


return (
  <parent>
    <div className=" text-gray-700 rounded-full items-center text-3xl ">
      <div className="bg-gradient-to-r from-green-400 to-blue-500  ">
        <h1> Speaker - {sonosData[0].coordinator.roomName}</h1>
        <div className="text-4xl font-semibold">
          <h1>{sonosData[0].coordinator.state.currentTrack.title}</h1>
        </div>
        <h1>{sonosData[0].coordinator.state.currentTrack.artist}</h1>
        <div classname="rounded-lg mx-auto items-center">
          <img
            src={
              sonosData[0].coordinator.state.currentTrack.absoluteAlbumArtUri
            }
            alt=""
            height="192"
            width="192"
          />
        </div>
      </div>
    </div>
  </parent>
);

*/
