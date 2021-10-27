
export default function CompanyPost({ title, body, author, authorThumb, datePosted }) {
  console.log(title, body, author, authorThumb, datePosted)
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
    </>
  )
}
