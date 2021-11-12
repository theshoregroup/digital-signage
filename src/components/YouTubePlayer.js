function YouTubePlayer({query, params}) {

  if (query == null) {
    query = "c4tLZJ1hrNQ"
  }

  let fullLink = "https://youtube.com/embed/" + query + params

  return (
    <iframe
      width="1140"
      height="640"
      src={fullLink}
      title="YouTube video player"
      allow='autoplay'
      />
  )
}

export default YouTubePlayer;