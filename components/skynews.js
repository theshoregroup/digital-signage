export default function SkyNews({ title, imageURL, id }) {
    console.log(imageURL)
    
    return (
    <article>
        <img src={imageURL} />
      <h2>{title}</h2>
    </article>
  )

  return {
    props: {
      postList,
    },
  }
}
