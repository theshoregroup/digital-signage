
import React from "react";

import Feed from 'rss-to-json'

const App = () => {    

const getFeed = () => {
  Feed.load('http://feeds.skynews.com/feeds/rss/uk.xml', function(err, rss){
    console.log(rss);
    return(
      <h6>
        {rss}
      </h6>
     ) 
    });
}



}

export default App;