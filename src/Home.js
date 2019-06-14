import React from "react";
import { Button } from "reactstrap";

class Home extends React.Component {
  state = {
    store: "new store"
  };

  render() {
    return (
      <div className="Home">
        <p>{this.props.name}</p>
        <p>{this.state.store}</p>
        <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

export default Home;
