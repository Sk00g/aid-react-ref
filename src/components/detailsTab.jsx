import React, { Component } from "react";

class DetailsTab extends Component {
  state = {};
  render() {
    return (
      <div className="container border-dark border border-bottom-0">
        <h5>Description:</h5>
        <p>Laser Range Finder from Voxtel 150um, 10Watt</p>

        <h5>Owner</h5>
        <p>Tim Troxel</p>

        <h5>Create Date</h5>
        <p>2018-03-22</p>
      </div>
    );
  }
}

export default DetailsTab;
