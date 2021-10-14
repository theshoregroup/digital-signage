export async function ServicesCall({query, key}) {
// fetch data from the Shore Group API
// This is only used to fetch config data, getting posts (or other data) should use /components/post
const configResponse = await fetch(
    `https://cms.theshoregroup.co.uk/${query}${key}`// Query, key
  )

  const configResponse = await response.json()
  
  return {
    props: {
      configResponse,
    },
  }
}