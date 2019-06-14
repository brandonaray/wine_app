import React from "react";

class Home extends React.Component {
  state = {
    store: "new store"
  };

  render() {
    return (
      <div className="Home">
        <p>{this.props.name}</p>
        <p>{this.state.store}</p>
      </div>
    );
  }
}

export default Home;
