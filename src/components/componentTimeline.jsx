import React, { Component } from "react";

class ComponentTimeline extends Component {
  state = {};
  context = null;
  canvas = null;
  canvas_id = "canvas_" + this.props.id;
  parentId = this.props.parentCellId;

  componentDidMount() {
    window.onresize = event => {
      console.log("resize");
    };

    console.log("parent", this.parentId);
    const parentElement = document.getElementById(this.parentId);
    console.log(
      "width: ",
      parentElement.getBoundingClientRect(),
      " | height:",
      parentElement.height
    );

    this.canvas = document.getElementById(this.canvas_id);
    this.context = this.canvas.getContext("2d");

    // Initial drawing? based on this.props?
    this.context.fillStyle = "green";
    this.context.fillRect(0, 0, 300, 35);
    this.context.moveTo(120, 0);
    this.context.lineTo(122, 0);
    this.context.lineTo(122, 35);
    this.context.lineTo(120, 35);
    this.context.fillStyle = "#22AA44";
    this.context.fill();
  }

  render() {
    return (
      <canvas id={this.canvas_id} width="300" height="30">
        Your browser sucks
      </canvas>
    );
  }
}

export default ComponentTimeline;
