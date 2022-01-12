import React from "react";
import axios from "axios";
import { Loader } from "./functional/Loader"


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
        let data = res.data


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
      
       this.state.data.data).map((item) => (
          <>
            <p key={item.id}>{item.id}</p>
          </>
          
        ))
     
    
  }
}


export { Compost };
