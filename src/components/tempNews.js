import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const News = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
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
   
    </div>
  )
}

export default News