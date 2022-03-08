import axios from "axios";
import { Loader } from "../functional/Loader";
import React from "react";

const config = {
  headers: {
    Authorization:
     process.env.REACT_APP_BACKEND_API_KEY,
  },
};

let API_KEY = process.env.REACT_APP_NEWS_API_KEY

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      urlData: [],
      newsData: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:1337/api/news-feeds", config)
      .then((response) => {
        this.setState({ urlData: response.data });
        console.log(this.state.urlData);
      })
      .then((response) => {
        return axios.get(this.state.urlData.data[0].attributes.url + API_KEY);
      })
      .then((response) => {
        this.setState({ newsData: response.data });
        console.log(this.state.newsData);
        this.setState({loading: false})
      })
      .catch((error) => console.log(error.response));
  }
  render() {
    if (this.state.loading) {
      return <Loader />;
    } //get articles titles as "headlines"
    else
      var headlines = this.state.newsData.articles.map((articles) => {
        return articles.title;
      });
    var join = headlines.join(" - "); // "seperate headlines "

    return (
      <div>
        {/* eslint-disable-next-line jsx-a11y/no-distracting-elements*/}
        <marquee className="" scrollamount="10">
          <p className="text-5xl"> {join} </p>
        </marquee>
      </div>
    );
  }
}

export default News;
