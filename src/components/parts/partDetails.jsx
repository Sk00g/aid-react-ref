import React, { Component } from "react";

class PartDetails extends Component {
  handleSubmit = e => {
    e.preventDefault();

    console.log("submitting changes");
  };

  componentDidUpdate(prevProps, prevState) {
    // property changed. if this.props.selectedPart changed, do stuff
  }

  valueChanged = ({ currentInput: value }) => {
    console.log("something");
  };

  render() {
    const part = this.props.selectedPart;

    return (
      <div className="container">
        <div className="d-flex border-bottom align-items-center justify-content-between pb-1 mb-2">
          <h1 className="h2">Details</h1>
          <div className="btn-toolbar">
            <div className="btn-group">
              <button className="btn btn-outline-dark">Save</button>
              <button className="btn btn-outline-dark">Reset</button>
            </div>
          </div>
        </div>
        <div className="container">
          <form className="needs-validation" noValidate="">
            <div className="row">
              <div className="col-6 mb-2">
                <div className="form-group row">
                  <label className="col-3 col-form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    className="form-control col-9"
                    type="text"
                    placeholder={part.name}
                    onChange={this.valueChanged}
                    required
                  />
                </div>
                <div className="form-group row">
                  <label className="col-3 col-form-label" htmlFor="order">
                    Order
                  </label>
                  <input
                    id="order"
                    className="form-control col-9"
                    type="text"
                    placeholder={part.order}
                    required
                  />
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="form-group row">
                  <label htmlFor="stock" className="col-3 col-form-label">
                    Stock
                  </label>
                  <input
                    type="text"
                    className="form-control col-9"
                    id="stock"
                    placeholder={part.stock}
                  />
                </div>
                <div className="form-group row">
                  <label className="col-3 col-form-label" htmlFor="sold">
                    Sold
                  </label>
                  <input
                    id="sold"
                    className="form-control col-9"
                    type="text"
                    placeholder={part.sold}
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PartDetails;
