import React, { Component } from "react";

export class CounterStateDefProps extends Component {
  // Значення за замовчуванням, якщо не переданий step
  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    // ...
  };

  // передача початкового значення для value:
  state = { value: this.props.step };

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    const { step } = this.props; // якщо не переданий, то буде ===1
    return (
      <div>
        <h3>CounterStateUpd</h3>
        <span>{this.state.value}</span>

        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>

        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}
