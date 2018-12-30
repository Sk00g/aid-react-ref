import React, { Component } from "react";
import ComponentView from "./componentView";
import ActionTab from "./actionTab";
import DetailsTab from "./detailsTab";

class OverviewPage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <ComponentView />
          </div>
          <div className="col">
            <ActionTab />
            <DetailsTab />
          </div>
        </div>
      </div>
    );
  }
}

export default OverviewPage;
