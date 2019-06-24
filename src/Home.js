import React from "react";
import Search from "./Search.js";

class Home extends React.Component {
  state = {
    store: "new store"
  };

  render() {
    return (
      <div className="Home">
        <p>{this.props.name}</p>
        <p>{this.state.store}</p>
        <Search />
      </div>
    );
  }
}

export default Home;
