import React, { Component } from "react";

class Sample extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.props.history.goBack}>Go Back</button>
      </div>
    );
  }
}

export default Sample;
