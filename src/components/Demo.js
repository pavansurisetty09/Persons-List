import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: false,
      z: 20,
    };
  }

  x = 30;

  render() {
    const y = 10;
    return (
      <>
        {!this.state.value ? <div>Bunny</div> : <div>Rishi</div>}
        {/* <h1>{this.x}</h1>
        <h1>{y}</h1>
        <h1>{this.state.z}</h1> */}
      </>
    );
    // if (this.state.value) {
    //   return <div>buny</div>;
    // } else {
    //   return <div>rishi</div>;
    // }
  }
}

export default Demo;
