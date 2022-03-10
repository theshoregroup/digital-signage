import axios from "axios";
import { Loader } from "../functional/Loader";
import React from "react";

const config = {
  headers: {
    Authorization: process.env.REACT_APP_BACKEND_API_KEY,
  },
};

const header = {
  headers: {
    "Ocp-Apim-Subscription-Key": process.env.REACT_APP_BING_API_KEY,
  },
};

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      urlData: [],
      newsData: [],
      index: 0,
    };
  }

  indexer(){
    while(this.state.index < 3)
    this.setState({index: this.state.index + 1})
    console.log(this.state.index)

  }

  reset() {

    this.setState({index: 0})
  }

 

  componentDidMount() {

   
    axios
      .get("http://localhost:1337/api/news", config)
      .then((response) => {
        this.setState({ urlData: response.data });
        console.log(this.state.urlData);
      })
      .then((response) => {
        return axios.get(
          "https://api.bing.microsoft.com/v7.0/news/search" +
            "?q=" +
            this.state.urlData.data[this.state.index].attributes.Query,

          header
        );
      })
      .then((response) => {
        this.setState({ newsData: response.data });
        console.log(this.state.newsData);
        this.setState({ loading: false });
       
        //compare index to available elements
        console.log(this.state.urlData.data.length)
        this.timerID = setInterval(
          () => this.indexer(),
          10000
        );

      
      })
      .catch((error) => console.log(error.response));
     
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <div className="text-semibold "> News </div> <Loader />
        </div>
      );
    } //get articles titles as "headlines"
    else
      var headlines = this.state.newsData.value.map((articles) => {
        return articles.name;
      });
    var joined = headlines.join(" - "); // "seperate headlines "
    console.log(headlines);
   
    return (
      <div>
        <div className="text-semibold">
          {" "}
          News - {this.state.urlData.data[this.state.index].attributes.Query}
        </div>
        {/* eslint-disable-next-line jsx-a11y/no-distracting-elements*/}
        <marquee className="text-5xl" scrollamount="10">
          <p className=""> {joined} </p>
        </marquee>
      </div>
    );
  }
}

export default News;
