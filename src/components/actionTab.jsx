import React, { Component } from "react";

class ActionTab extends Component {
  state = {};
  buttonStyle = "btn btn-outline-dark";

  handleAction(action) {
    console.log("clicked action", action);
  }

  render() {
    return (
      <React.Fragment>
        <h4>Actions</h4>
        <div className="btn-group-vertical" style={{ width: "100%" }}>
          <button className={this.buttonStyle} onClick={() => this.handleAction("create")}>
            Create
          </button>
          <button className={this.buttonStyle} onClick={() => this.handleAction("edit")}>
            Edit
          </button>
          <button className={this.buttonStyle} onClick={() => this.handleAction("arrived")}>
            Arrived
          </button>
          <button className={this.buttonStyle} onClick={() => this.handleAction("shipped")}>
            Shipped
          </button>
          <button className={this.buttonStyle} onClick={() => this.handleAction("delete")}>
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ActionTab;
