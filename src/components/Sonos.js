import { useEffect, useState } from "react";

export const Sonos = () => {
  const [sonosData, setSonosData] = useState({});
  useEffect(() => {
    const getMusicFromApi = async () => {
      const response = await fetch("http://localhost:5005/zones");
      const responseJson = await response.json();
      console.log("json", responseJson);
      setSonosData(responseJson);
    };
    setInterval(getMusicFromApi, 3000);
  }, []);

  return (
    <parent>
      <div className=" text-gray-700 rounded-full text-center text-3xl ">
        <div className="bg-gradient-to-r from-green-400 to-blue-500  ">
          <h1> {sonosData[1].coordinator.roomName}</h1>
          <div className="text-5xl font-semibold">
            <h1>{sonosData[1].coordinator.state.currentTrack.title}</h1>
          </div>
          <h1>{sonosData[1].coordinator.state.currentTrack.artist}</h1>
          <div classname="rounded-lg">
            <img
              src={
                sonosData[1].coordinator.state.currentTrack.absoluteAlbumArtUri
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
};

/*DISPLAY 
-Speaker name   /
-Artist               /
-Current track    / 
-Volume               
-Album /Artist art  /

FIX API LOAD ERROR

STYLE SONOS

sport information - financial info.

BBC Sports RSS - financial RSS - Guardian News JSON - take requests

  <div className=" text-gray-700 rounded-full text-center text-3xl">
        <div className="bg-gradient-to-r from-green-400 to-blue-500  ">
          <h1> {sonosData[1].coordinator.roomName}</h1>
          <div className="text-5xl font-semibold">
            <h1>{sonosData[1].coordinator.state.currentTrack.title}</h1>
          </div>
          <h1>{sonosData[1].coordinator.state.currentTrack.artist}</h1>

          <img
            src={
              sonosData[1].coordinator.state.currentTrack.absoluteAlbumArtUri
            }
            alt=""
            height="192"
            width="192"
          />
        </div>
      </div>

*/
