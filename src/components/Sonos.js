import React from "react";
import axios from "axios";
import { Loader } from "./functional/Loader"



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
    if (this.state.loading) {
      return <Loader />
    }

    else
      return (



        this.state.data.data).map((item) => (
          <>
            <div className=" text-gray-700 rounded-full items-center text-3xl ">
              <div className="bg-gradient-to-r from-green-400 to-blue-500  ">
                <div className="text-4xl font-semibold"></div>
                <h1> ADD SPECIFICS </h1>
              </div>
            </div>
          </>
        ))


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
