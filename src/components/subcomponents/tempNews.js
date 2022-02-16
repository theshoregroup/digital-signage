import axios from "axios";
import { Loader } from "../functional/Loader";
import React from "react";


let Source = "News" //Pull from API

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=be5b5ec5bfa345388ac8db5692953db2"
      )
      .then((res) => {
        var data = res.data


        this.setState({ data, loading: false });

        console.log(data)
      });
  }, 1500);
  }


  render() {
    if (this.state.loading) {
      return <Loader />
    }

    else
      return (
   
        <div>
        <h1>{this.state.data.articles[0].source.name} </h1>
        {/* eslint-disable-next-line jsx-a11y/no-distracting-elements*/}
        <marquee className="space-x-2" scrollamount="10"> 
            <p className="text-5xl"> {this.state.data.articles[0].title} </p>

        </marquee>
        </div>
      );
  }
}

export default News

