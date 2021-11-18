import { useEffect, useState } from "react";

  const News = () => {
    const [data, setData] = useState({});
    useEffect(() => {
      const getNewsFromApi = async () => {
        const response = await fetch( 'https://feeds.skynews.com/feeds/rss/technology.xml'
          
        );
        const responseJson = await response.json();
        console.log("json", responseJson);
        setData(responseJson);
      };
      getNewsFromApi();
    }, []);

    return(
      {data}
    )




}

export default News;
