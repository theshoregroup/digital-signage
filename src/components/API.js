import React from "react";
import axios from "axios";
import { Loader } from "./functional/Loader";

class Compost extends React.Component {
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
        "https://cms.theshoregroup.co.uk/items/posts?access_token=w3vytpbZvEf69LZmiyoNX8h"
      )
      .then((res) => {
        let data = res.data;
        this.setState({ data, loading: false });
        console.log(data);
      });
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    } else {
      let specificBody = this.state.data.data.map((body) => {
        return body.availability
      });
      let specificTitle = this.state.data.data[1].title;
      let specificPosted_By = this.state.data.data[1].posted_by;

      return (
        <div className="text-center">
          <div className="font-semibold text-4xl animate-fade-in-up">{specificTitle}</div>
          <div className="text-2xl animate-fade-in-down"> {specificBody}</div>
          <div className="text-3xl font-semibold">-{specificPosted_By}</div>
        </div>
      );
      }
    }
  }


export { Compost };
