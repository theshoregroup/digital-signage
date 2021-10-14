export default function YouTubePlayer(props) {

  let query
  if (props.query == null) {
    query = "c4tLZJ1hrNQ"
  } else {
    query = props.query
  }

  let fullLink = "https://youtube.com/embed/" + query + props.params

  return (
    <iframe
      width="560"
      height="315"
      src={fullLink}
      title="YouTube video player"
      allow='autoplay'
      />
  )
}