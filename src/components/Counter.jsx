import React, { Component } from "react";

export class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button
          type="button"
          onClick={evt => {
            console.log("Increment button was clicked!", evt); // працює
            console.log("this.props: ", this.props); // працює
          }}>
          > Increment by {step}
        </button>
        <button
          type="button"
          onClick={evt => {
            console.log("Decrement button was clicked!", evt); // працює
            console.log("this.props: ", this.props); // працює
          }}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}
