import React from "react";
import axios from "axios";
import { Loader } from "../functional/Loader";

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
      let frontSpeakerName = this.state.data[1].coordinator?.roomName;
      let frontSpeakerArtist =
        this.state.data[1].coordinator?.state?.currentTrack?.artist;
      let frontSpeakerTitle =
        this.state.data[1].coordinator?.state?.currentTrack?.title;
      let frontSpeakerArt =
        this.state.data[1].coordinator?.state?.currentTrack?.albumArtUri;

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
