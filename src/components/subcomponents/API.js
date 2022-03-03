import React, {useState} from "react";
import axios from "axios";
import { Loader } from "../functional/Loader";


  



class Compost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
  }


  




  componentDidMount() {
    let config = {
      headers: {
        Authorization: "Bearer ade8861266b7a17189efa08eb21f9acfb4938b7290b0a26480e99a610d219bacd5e24cf0945b7c0e36c0e24e31c6e5ec6523a9a2564a89e1510f73d42958f7efeb7aac7867ae68bf30794397aaed10888e96c804a5aeb60810225592240f0111661c992f1da85ffea2f849244faa92106db77ebb4a1e8d8fc0f6a4e8e94c1514"
    }
  }
    
  

    axios
      .get(
        "http://localhost:1337/api/posts", config
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
     let index =2
      
      
      


      return (
        <div className="text-center text-white">
          <div className="font-semibold text-4xl animate-fade-in-up">
          { this.state.data.data[index].attributes.Title}
          </div>
          <div className="text-3xl animate-fade-in-down"></div>
          { this.state.data.data[index].attributes.Body}
          <div className="text-3xl font-semibold"></div>
        </div>
      );
    }
  }
}


export { Compost };
