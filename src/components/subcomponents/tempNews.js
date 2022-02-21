import axios from "axios";
import { Loader } from "../functional/Loader";
import React from "react";
import { Index } from './Index'


let API_KEY="be5b5ec5bfa345388ac8db5692953db2"




class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
  }







  componentDidMount() {

 

    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=gb&apiKey="+API_KEY
      )
      .then((res) => {
        var data = res.data
        this.setState({ data, loading: false });
        console.log(data)
      });

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
          <marquee className="" scrollamount="10">
            <p className="text-5xl"> {this.state.data.articles[0].title} </p>

          </marquee>
        </div>
      );
  }
}

export default News

