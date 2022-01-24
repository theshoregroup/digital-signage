import axios from "axios";
import { Loader } from "./functional/Loader"
import React from "react";




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
        "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=1696bf49a11542e786afeb06b1540cf9"
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
        // Disables ES-Lint warning about the use of <marquee>
        // eslint-disable-next-line
        <marquee className="space-x-2" scrollamount="10">
          {this.state.data.articles.map((item) => (
            <p className="inline text-5xl" key={item.key}>{item.title} </p>
          ))}
        </marquee>
      );
  }
}

export default News

