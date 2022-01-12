import React from "react";
import axios from "axios";

const Loader = () => (
  <div class="divLoader">
    <svg class="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
      <path
        stroke="none"
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#51CACC"
        transform="rotate(179.719 50 51)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 51;360 50 51"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
      </path>
    </svg>
  </div>
);

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
    // return table if loading is false
    // handling error goes with the same logic
    // table will only render if loading is false
    else 
    return (
      
       this.state.data.data[0]).map((item) => (
          <>
            <p key={item.id}>{item.title}</p>
          </>
        ))
     
    
  }
}


export { Compost };
