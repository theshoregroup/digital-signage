import { useEffect, useState } from "react"

import useSWR from "swr"

// @ts-ignore: Rest parameter 'args' implicitly has an 'any[]' type.
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function NewsHighlight() {

    const [spotlight, setSpotlight] = useState(0)
    
    const { data, error } = useSWR("/api/v1/content/news", fetcher, {
        refreshInterval: 1000000,
        refreshWhenHidden: true,
      });
      
      // Spotlight
        useEffect(() => {
          if (data && spotlight >= data[1].results.length) {
            setSpotlight(0)
          }
          const int = setInterval(() => setSpotlight(spotlight + 1), 10000)
    
          return () => clearInterval(int)
        })

    if (error || data == undefined)
        return <div>IT Messages: Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    

    return (
        <div className="flex relative w-full h-full">
            <span className="absolute z-10 bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-opacity-50 text-3xl font-bold">{data[1].results[spotlight].title}</span>
            <img className="z-0 object-cover h-full w-full rounded" src={data[1].results[spotlight].image_url} alt={data[1].results[spotlight].title} onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1581067141051-a7b799ba6814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            }}></img>
        </div>
    )
}