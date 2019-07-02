/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import data from "./data.json";

class WineModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const selectedWine = data.results.find(wine => {
      return wine.wine === this.props.selectedWine;
    });

    console.log(selectedWine);

    return (
      <div>
        <Button color="light" onClick={this.toggle}>
          Search
        </Button>

        {selectedWine && (
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{selectedWine.wine}</ModalHeader>
            <ModalBody>
              <ul>
                <li>Appellation: {selectedWine.appellation}</li>
                <li>Region: {selectedWine.regions}</li>
                <li>Country: {selectedWine.country}</li>
                <li>Vintage: {selectedWine.vintage}</li>
                <li>Color: {selectedWine.color}</li>
                <li>Score: {selectedWine.score}</li>
                <li>Grade: {selectedWine.confidence_index}</li>
              </ul>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Do Something
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </div>
    );
  }
}

export default WineModal;
