import axios from "axios";
import { Loader } from "../functional/Loader";
import React from "react";
import { Index } from './Index'


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
          "https://free-news.p.rapidapi.com/v1/search?q=UK&lang=en"
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
          <h1>{this.state.data.articles[Index].clean_url} </h1>
          {/* eslint-disable-next-line jsx-a11y/no-distracting-elements*/}
          <marquee className="" scrollamount="10">
            <p className="text-5xl"> {this.state.data.articles[Index].title} </p>

          </marquee>
        </div>
      );
  }
}

export default News

