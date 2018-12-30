import React, { Component } from "react";

class PartsActionTab extends Component {
  state = {};
  render() {
    const buttonStyle = "btn btn-outline-dark";

    return (
      <React.Fragment>
        <h4>Actions</h4>
        <div className="btn-group-vertical" style={{ width: "100%" }}>
          <button className={buttonStyle} onClick={() => this.handleAction("create")}>
            New
          </button>
          <button className={buttonStyle} onClick={() => this.handleAction("sale")}>
            Sale
          </button>
          <button className={buttonStyle} onClick={() => this.handleAction("arrival")}>
            Arrival
          </button>
          <button className={buttonStyle} onClick={() => this.handleAction("order")}>
            Order
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default PartsActionTab;
