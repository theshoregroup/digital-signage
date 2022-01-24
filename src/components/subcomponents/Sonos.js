import React from "react";
import axios from "axios";
import { Loader } from "./functional/Loader";

class Sonos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      axios.get("http://localhost:5005/zones").then((res) => {
        let data = res.data;
        console.log(data);
        this.setState({ data, loading: false });
        console.log(data);
      });
    }, 5000);
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    } else {
      //Front office speaker variables
      let frontSpeakerName = this.state.data[0].coordinator?.roomName;
      let frontSpeakerArtist =
        this.state.data[0].coordinator?.state?.currentTrack?.artist;
      let frontSpeakerTitle =
        this.state.data[0].coordinator?.state?.currentTrack?.title;
      let frontSpeakerArt =
        this.state.data[0].coordinator?.state?.currentTrack?.albumArtUri;

      // Commented out to fix no-unused-vars - @liamdoyle
      // //Back office speaker variables
      // let backSpeakerName = this.state.data[1].coordinator?.roomName;
      // let backSpeakerArtist =
      //   this.state.data[1].coordinator?.state?.currentTrack?.artist;
      // let backSpeakerTitle =
      //   this.state.data[1].coordinator?.state?.currentTrack?.title;
      // let backSpeakerArt =
      //   this.state.data[1].coordinator?.state?.currentTrack?.albumArtUri;

      return (
        <div className=" rounded-full items-center text-3xl ">
          <div className="">
            <div className="text-4xl font-semibold">
              {frontSpeakerName}
              <br />
              {frontSpeakerArtist} -{frontSpeakerTitle}
              <img src={frontSpeakerArt} alt="" height="192" width="192" />
            </div>
          </div>
        </div>
      );
    }
  }
}

export { Sonos };
/*
   switchSpeaker(){
      switch () {
        case "backOffice":
          return (
            <div className=" text-gray-700 rounded-full items-center text-3xl ">
              <div className="bg-gradient-to-r from-green-400 to-blue-500  ">
                <div className="text-4xl font-semibold">
                  {backSpeakerName}
                  {backSpeakerArtist}
                  {backSpeakerTitle}
                  {backSpeakerArt}
                </div>
              </div>
            </div>
          );
        case "frontOffice":
          return (
            <div className=" text-gray-700 rounded-full items-center text-3xl ">
              <div className="bg-gradient-to-r from-green-400 to-blue-500  ">
                <div className="text-4xl font-semibold">
                  {frontSpeakerName}
                  {frontSpeakerArtist}
                  {frontSpeakerTitle}
                  {frontSpeakerArt}
                </div>
              </div>
            </div>
          );
          
        default:
          "frontOffice";
      }
    }

*/
