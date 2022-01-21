import {useState, useEffect} from "react";

export const ArticleCarousel = (data, time) => {

   const [index, setIndex] = useState(0)
    
    useEffect(() => {
     const interval = setInterval(() => {
       setIndex(i => (i + 1) % 4)
   }, 1000)
    return () => clearInterval(interval), index
   },  

    
    )}
