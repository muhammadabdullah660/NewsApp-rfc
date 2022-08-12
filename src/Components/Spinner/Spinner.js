import React, { Component } from "react";
import loading from "../../Resources/loading.gif";
export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="" />
      </div>
    );
  }
}

export default Spinner;
