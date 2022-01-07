import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const News = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getNewsFromApi = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=1696bf49a11542e786afeb06b1540cf9"
      );
      const responseJson = await response.json();
      console.log("json", responseJson);
      setData(responseJson);
    };
    setInterval(getNewsFromApi, 10000)
  }, []);


  return (
    <div >
    
      <Marquee gradientColor="" speed="120">
        <h1>{data?.articles[0].title} </h1>
        <h1>{data?.articles[1].title} </h1>
        <h1>{data?.articles[2].title} </h1>
        <h1>{data?.articles[3].title} </h1>
        <h1>{data?.articles[4].title} </h1>
        <h1>{data?.articles[5].title} </h1>
        <h1>{data?.articles[6].title} </h1>
        <h1>{data?.articles[7].title} </h1>
        <h1>{data?.articles[8].title} </h1>

      
      </Marquee>
    </div>


  )
}

export default News

/* */