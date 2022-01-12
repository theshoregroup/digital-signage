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
    
    else return (
      <div>
       {this.state.data.length > 0 && this.state.data.articles.map((item)=> <h1>{item.title} </h1>)}


      </div>
    )
  }
}

export default News

