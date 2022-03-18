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


  indexer() {
    if (this.state.index < this.state.urlData.data.length - 1) {
      this.setState({ index: this.state.index + 1 })
      console.log(this.state.index)
    }
    else {
      this.setState({ index: 0 })
    }
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
        var headlines = response.data.value.map((articles) => {
          return articles.name;
        });
        var joined = headlines.join(" - "); // "seperate headlines "
        this.setState({ newsData: joined });
        console.log(this.state.newsData);
        this.setState({ loading: false });

        //compare index to available elements
        console.log(this.state.urlData.data.length)
        this.timerID = setInterval(
          () => this.indexer(),
          60000
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


      return (
        <div className="p-4">
          <div className="text-semibold text-6xl">
            {" "}
            News - {this.state.urlData.data[this.state.index].attributes.Query}
          </div>
          {/* eslint-disable-next-line jsx-a11y/no-distracting-elements*/}
          <marquee className="text-5xl" scrollamount="10">
            <p className=""> {this.state.newsData} </p>
          </marquee>
        </div>
      );
  }
}

export default News;
