import React, { Component } from "react";
import ComponentTimeline from "./componentTimeline";

class ComponentView extends Component {
  state = {
    componentList: [
      { id: 1, name: "Voxtel LRF", status: "Arrived", timeline: "||||||||||||||||" },
      { id: 2, name: "Enclosure", status: "Production", timeline: "||||||||||||||||" },
      { id: 3, name: "Cooled Thermal", status: "Shipped", timeline: "||||||||||||||||" },
      { id: 4, name: "Encoder", status: "Production", timeline: "||||||||||||||||" }
    ]
  };

  render() {
    return (
      <table className="table table-striped table-sm">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Timeline</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {this.state.componentList.map(comp => (
            <tr key={comp.id}>
              <td>{comp.id}</td>
              <td>{comp.name}</td>
              <td id={"timelineTd_" + comp.id}>
                <ComponentTimeline id={comp.id} parentCellId={"timelineTd_" + comp.id} />
              </td>
              <td>{comp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ComponentView;
