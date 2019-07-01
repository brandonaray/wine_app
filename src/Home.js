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
    this.setState({
      wines: data.results
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
        <WineModal selectedWine={this.state.selectedWine} />
      </div>
    );
  }
}

export default Home;
