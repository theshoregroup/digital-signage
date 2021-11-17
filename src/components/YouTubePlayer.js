function YouTubePlayer({query, params}) {

  if (query == null) {
    query = "c4tLZJ1hrNQ"
  }

  let fullLink = "https://youtube.com/embed/" + query + params

  return (
    <iframe
      width="1350"
      height="759"
      src={fullLink}
      title="YouTube video player"
      allow='autoplay'
      />
  )
}

export default YouTubePlayer;