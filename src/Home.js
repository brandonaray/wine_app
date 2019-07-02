import React from "react";
import Search from "./Search.js";
import Axios from "axios";
import data from "./data.json";
import Wine from "./Wine.js";
import WineModal from "./WineModal.js";

class Home extends React.Component {
  state = {
    store: "new store",
    wines: [],
    selectedWine: ""
  };

  componentDidMount() {
    Axios.get("https://actualize-wine-proxy.herokuapp.com/wines").then(response => {
      // console.log(data);
      this.setState({
        wines: response.data.results
      });
    });

    console.log(this.state.wines);
  }

  handleSelect = value => {
    this.setState({
      selectedWine: value
    });
  };

  render() {
    return (
      <div className="Home">
        <p>{this.props.name}</p>
        <Search wines={this.state.wines} handleSelect={this.handleSelect} />
        <WineModal wines={this.state.wines} selectedWine={this.state.selectedWine} />
      </div>
    );
  }
}

export default Home;
