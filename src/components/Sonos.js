import { useEffect, useState } from "react";

  export const Sonos = () => {
    const [sonosData, setSonosData] = useState([
      {
          "uuid": "RINCON_949F3E70867601400",
          "coordinator": {
              "uuid": "RINCON_949F3E70867601400",
              "state": {
                  "volume": 35,
                  "mute": false,
                  "equalizer": {
                      "bass": 0,
                      "treble": 0,
                      "loudness": true
                  },
                  "currentTrack": {
                      "artist": "Elbow",
                      "title": "One Day Like This",
                      "album": "The Seldom Seen Kid",
                      "albumArtUri": "https://i.scdn.co/image/ab67616d0000b273967a417ba6b1db017324e8a8",
                      "duration": 394,
                      "uri": "x-sonos-spotify:spotify:track:1OZSVl0JJ1MBzibpuhmmXb?sid=9&flags=0&sn=46",
                      "trackUri": "x-sonos-spotify:spotify:track:1OZSVl0JJ1MBzibpuhmmXb?sid=9&flags=0&sn=46",
                      "type": "track",
                      "stationName": "",
                      "absoluteAlbumArtUri": "https://i.scdn.co/image/ab67616d0000b273967a417ba6b1db017324e8a8"
                  },
                  "nextTrack": {
                      "artist": "Squeeze",
                      "title": "Cool For Cats",
                      "album": "Cool For Cats",
                      "duration": 0
                  },
                  "trackNo": 1,
                  "elapsedTime": 294,
                  "elapsedTimeFormatted": "00:04:54",
                  "playbackState": "PLAYING",
                  "playMode": {
                      "repeat": "none",
                      "shuffle": false,
                      "crossfade": false
                  }
              },
              "roomName": "Geezers Need Excitement",
              "coordinator": "RINCON_949F3E70867601400",
              "groupState": {
                  "volume": 35,
                  "mute": false
              }
          },
          "members": [
              {
                  "uuid": "RINCON_949F3E70867601400",
                  "state": {
                      "volume": 35,
                      "mute": false,
                      "equalizer": {
                          "bass": 0,
                          "treble": 0,
                          "loudness": true
                      },
                      "currentTrack": {
                          "artist": "Elbow",
                          "title": "One Day Like This",
                          "album": "The Seldom Seen Kid",
                          "albumArtUri": "https://i.scdn.co/image/ab67616d0000b273967a417ba6b1db017324e8a8",
                          "duration": 394,
                          "uri": "x-sonos-spotify:spotify:track:1OZSVl0JJ1MBzibpuhmmXb?sid=9&flags=0&sn=46",
                          "trackUri": "x-sonos-spotify:spotify:track:1OZSVl0JJ1MBzibpuhmmXb?sid=9&flags=0&sn=46",
                          "type": "track",
                          "stationName": "",
                          "absoluteAlbumArtUri": "https://i.scdn.co/image/ab67616d0000b273967a417ba6b1db017324e8a8"
                      },
                      "nextTrack": {
                          "artist": "Squeeze",
                          "title": "Cool For Cats",
                          "album": "Cool For Cats",
                          "duration": 0
                      },
                      "trackNo": 1,
                      "elapsedTime": 294,
                      "elapsedTimeFormatted": "00:04:54",
                      "playbackState": "PLAYING",
                      "playMode": {
                          "repeat": "none",
                          "shuffle": false,
                          "crossfade": false
                      }
                  },
                  "roomName": "Geezers Need Excitement",
                  "coordinator": "RINCON_949F3E70867601400",
                  "groupState": {
                      "volume": 35,
                      "mute": false
                  }
              }
          ]
      },
      {
          "uuid": "RINCON_542A1BC826C001400",
          "coordinator": {
              "uuid": "RINCON_542A1BC826C001400",
              "state": {
                  "volume": 19,
                  "mute": false,
                  "equalizer": {
                      "bass": 1,
                      "treble": -1,
                      "loudness": true
                  },
                  "currentTrack": {
                      "duration": 0,
                      "uri": "x-sonos-vli:RINCON_542A1BC826C001400:2,spotify:0646e7c39048671ff95ed2a2913a914c",
                      "trackUri": "x-sonos-vli:RINCON_542A1BC826C001400:2,spotify:0646e7c39048671ff95ed2a2913a914c",
                      "type": "track",
                      "stationName": ""
                  },
                  "nextTrack": {
                      "artist": "",
                      "title": "",
                      "album": "",
                      "albumArtUri": "",
                      "duration": 0,
                      "uri": ""
                  },
                  "trackNo": 1,
                  "elapsedTime": 0,
                  "elapsedTimeFormatted": "00:00:00",
                  "playbackState": "PAUSED_PLAYBACK",
                  "playMode": {
                      "repeat": "none",
                      "shuffle": false,
                      "crossfade": false
                  }
              },
              "roomName": "Goons",
              "coordinator": "RINCON_542A1BC826C001400",
              "groupState": {
                  "volume": 19,
                  "mute": false
              }
          },
          "members": [
              {
                  "uuid": "RINCON_542A1BC826C001400",
                  "state": {
                      "volume": 19,
                      "mute": false,
                      "equalizer": {
                          "bass": 1,
                          "treble": -1,
                          "loudness": true
                      },
                      "currentTrack": {
                          "duration": 0,
                          "uri": "x-sonos-vli:RINCON_542A1BC826C001400:2,spotify:0646e7c39048671ff95ed2a2913a914c",
                          "trackUri": "x-sonos-vli:RINCON_542A1BC826C001400:2,spotify:0646e7c39048671ff95ed2a2913a914c",
                          "type": "track",
                          "stationName": ""
                      },
                      "nextTrack": {
                          "artist": "",
                          "title": "",
                          "album": "",
                          "albumArtUri": "",
                          "duration": 0,
                          "uri": ""
                      },
                      "trackNo": 1,
                      "elapsedTime": 0,
                      "elapsedTimeFormatted": "00:00:00",
                      "playbackState": "PAUSED_PLAYBACK",
                      "playMode": {
                          "repeat": "none",
                          "shuffle": false,
                          "crossfade": false
                      }
                  },
                  "roomName": "Goons",
                  "coordinator": "RINCON_542A1BC826C001400",
                  "groupState": {
                      "volume": 19,
                      "mute": false
                  }
              }
          ]
      }
  ]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setLoading(true);
      (async function getMusicFromApi(){
        const response = await fetch("http://localhost:5005/zones");
          
        
        const responseJson = await response.json();
        console.log("json", responseJson);
        setSonosData(responseJson);
        setInterval(getMusicFromApi,3000)
      })();
      setLoading(false);
      
    }, []);
  
    if (loading) {
      return <h1> Data is loading...</h1>
    }

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
};

/*DISPLAY 
-Speaker name   /
-Artist               /
-Current track    / 
-Volume               
-Album /Artist art  /

FIX API LOAD ERROR


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
