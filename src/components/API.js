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
      let apiSwitcher
      switch  (apiSwitcher){      //load API data into arrays so specific elements can be rendered. Janky method. Re-visit.
      //
      case 'element0':
      let body0 = this.state.data.data[0].body;
      let title0 = this.state.data.data[0].title;
      let posted_By0 = this.state.data.data[0].posted_by;
      //
      case 'element1':
      let body1 = this.state.data.data[1].body;
      let title1 = this.state.data.data[1].title;
      let posted_By1 = this.state.data.data[1].posted_by;
      //
      case 'element2':
      let body2 = this.state.data.data[2].body;
      let title2 = this.state.data.data[2].title;
      let posted_By2 = this.state.data.data[2].posted_by;
      //
      case 'element3':
      let body3 = this.state.data.data[3].body;
      let title3 = this.state.data.data[3].title;
      let posted_By3 = this.state.data.data[3].posted_by;
      //
      case 'element4':
      let body4 = this.state.data.data[4].body;
      let title4 = this.state.data.data[4].title;
      let posted_By4 = this.state.data.data[4].posted_by;
      //
      case 'element5':
      let body5 = this.state.data.data[5].body;
      let title5 = this.state.data.data[5].title;
      let posted_By5 = this.state.data.data[5].posted_by;
      
      


      return (
        <div className="text-center">
          <div className="font-semibold text-4xl">{apiSwitcher}</div>
          <div className="text-2xl"> {body2}</div>
          <div className="text-3xl font-semibold">-{posted_By1}</div>
        </div>
      );
      }
    }
  }
}

export { Compost };
