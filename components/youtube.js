export default function YouTubePlayer(uri) {
  
  let videoSRC
  if (uri.query == null) {
    videoSRC = "https://youtube.com/embed/c4tLZJ1hrNQ"
  } else {
    videoSRC = "https://youtube.com/embed/" + uri.query
  }

  console.log(videoSRC)
  

  return (
      <iframe
        className=""
        src={videoSRC}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media;  gyroscope; picture-in-picture"
        allowFullScreen
      />
  )
}