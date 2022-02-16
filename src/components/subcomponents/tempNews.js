import axios from "axios";
import { Loader } from "../functional/Loader";
import React from "react";
import { Index } from './Index'



class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
  }




  componentDidMount() {

    var config = {
      method: 'GET',
      params: { q: 'Elon Musk', lang: 'en' },
      headers: {
        'x-rapidapi-host': 'free-news.p.rapidapi.com',
        'x-rapidapi-key': 'c2360d4b84msh4ddad2a91e9582bp17ff3ajsne0727e2854a9'
      },

    };

    axios
      .get(
        "https://free-news.p.rapidapi.com/v1/search", config
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
          <h1>{this.state.data.articles[0].clean_url} </h1>
          {/* eslint-disable-next-line jsx-a11y/no-distracting-elements*/}
          <marquee className="" scrollamount="10">
            <p className="text-5xl"> {this.state.data.articles[0].title} </p>

          </marquee>
        </div>
      );
  }
}

export default News

