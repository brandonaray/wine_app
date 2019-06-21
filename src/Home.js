import React from "react";
import Search from "./Search.js";
import Axios from "axios";
import data from "./data.json";
import Wine from "./Wine.js";

class Home extends React.Component {
  state = {
    store: "new store",
    wines: []
  };

  componentDidMount() {
    this.setState({
      wines: data.results
    });
    console.log(data.results);
  }

  render() {
    return (
      <div className="Home">
        <p>{this.props.name}</p>
        <Search />
        {this.state.wines.map(wine => {
          return <Wine key={wine.wine_id} wine={wine} />;
        })}
      </div>
    );
  }
}

export default Home;
