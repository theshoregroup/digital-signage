import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const News = () => {
  const [data, setData] = useState({
    "status": "ok",
    "totalResults": 70,
    "articles": [
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Italian media highlight Mourinho's errors and Maitland-Niles' shocking Roma debut - Football Italia - Football Italia",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMibGh0dHBzOi8vZm9vdGJhbGwtaXRhbGlhLm5ldC9pdGFsaWFuLW1lZGlhLWhpZ2hsaWdodC1tb3VyaW5ob3MtZXJyb3JzLWFuZC1tYWl0bGFuZC1uaWxlcy1zaG9ja2luZy1yb21hLWRlYnV0L9IBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-01-10T10:18:30Z",
            "content": null
        },
    ]
});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    (async function getNewsFromApi(){
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=1696bf49a11542e786afeb06b1540cf9"
      );
      const responseJson = await response.json();
      console.log("json", responseJson);
      setData(responseJson);
    })();
    setLoading(false);
  }, []);

  if (loading) {
    return <h1> Data is loading...</h1>
  }
  return (
    <div >
      <Marquee gradientColor="" speed="120">
      <h1>{data.articles[0].title}</h1>  
      </Marquee>
    </div>
  )
}

export default News