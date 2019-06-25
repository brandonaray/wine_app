import React from "react";

class Wine extends React.Component {
  render() {
    return <div className="Wine">{this.props.wine.wine}</div>;
  }
}

export default Wine;
