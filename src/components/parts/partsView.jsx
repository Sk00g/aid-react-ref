import React, { Component } from "react";

class PartsView extends Component {
  formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? "-" : "";

      let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
      let j = i.length > 3 ? i.length % 3 : 0;

      return (
        "$" +
        negativeSign +
        (j ? i.substr(0, j) + thousands : "") +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
        (decimalCount
          ? decimal +
            Math.abs(amount - i)
              .toFixed(decimalCount)
              .slice(2)
          : "")
      );
    } catch (e) {
      console.log(e);
    }
  }

  getFontColor(stock, flag) {
    if (stock < flag) {
      return "#CC3322";
    } else if (stock - 5 < flag) {
      return "#E2E200";
    } else {
      return "#222222";
    }
  }

  render() {
    return (
      <table className="table table-striped table-sm table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Stock</th>
            <th scope="col">On Order</th>
            <th scope="col">Sold</th>
            <th scope="col">Cost</th>
            <th scope="col">Total Value</th>
            <th scope="col">Flag</th>
          </tr>
        </thead>
        <tbody>
          {this.props.partList.map(part => (
            <tr
              key={part.name}
              onClick={() => this.props.onSelect(part)}
              style={{ backgroundColor: part === this.props.selectedPart ? "#BBBBCC" : null }}>
              <td style={{ color: "#222222" }}>{part.name}</td>
              <td style={{ color: this.getFontColor(part.stock, part.flag) }}>
                <b>{part.stock}</b>
              </td>
              <td>{part.order}</td>
              <td>{part.sold}</td>
              <td>{this.formatMoney(part.cost)}</td>
              <td>{this.formatMoney(part.cost * (part.stock + part.order))}</td>
              <td>{`(${part.flag})`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default PartsView;
