import React, { Component } from "react";
import PartsView from "./parts/partsView";
import PartsActionTab from "./parts/partsActionTab";
import PartDetails from "./parts/partDetails";

class PartsPage extends Component {
  state = {
    partList: [
      { name: "Arduino Mega", stock: 12, order: 0, sold: 24, cost: 18.99, flag: 4 },
      { name: "BeagleBone Black", stock: 11, order: 3, sold: 44, cost: 75.09, flag: 10 },
      { name: "SDI/CVI Converter", stock: 10, order: 0, sold: 0, cost: 34.56, flag: 4 },
      { name: "Octagon Mini", stock: 9, order: 5, sold: 2, cost: 180.99, flag: 10 }
    ],
    selectedPart: null
  };

  componentDidMount() {
    // In reality would call from server, then hit this after...
    const { partList } = this.state;
    if (partList.length > 0) {
      this.setState({ selectedPart: partList[0] });
    }
  }

  onSelectPart(part) {
    if (part === this.state.selectedPart) return null;

    console.log("selected part:", part.name);
    this.setState({ selectedPart: part });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <PartsView
              onSelect={part => this.onSelectPart(part)}
              partList={this.state.partList}
              selectedPart={this.state.selectedPart}
            />
          </div>
          <div className="col">
            <PartsActionTab />
          </div>
        </div>
        <div className="row">
          <div className="col">
            {this.state.selectedPart && <PartDetails selectedPart={this.state.selectedPart} />}
          </div>
        </div>
      </div>
    );
  }
}

export default PartsPage;
