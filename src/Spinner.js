import React from "react";
import { Spinner } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <Spinner color="primary" />
      </div>
    );
  }
}
