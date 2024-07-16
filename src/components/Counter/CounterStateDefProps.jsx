import React, { Component } from "react";
import { Controls } from "components/Counter/Controls/Controls";

class CounterStateDefProps extends Component {
  // Значення за замовчуванням, якщо не переданий step:
  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    // ...
  };

  // передача початкового значення для value:
  state = {
    value: this.props.step,
  };

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + this.props.step }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - this.props.step }));
  };

  render() {
    const { step } = this.props; // якщо не переданий, то буде ===1
    const { value } = this.state;
    return (
      <div>
        <h3>CounterStateDefProps</h3>

        <span>{value}</span>

        {/* Винести розмітку у додатковий компонент: */}
        <Controls
          step={step}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>

        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button> */}
      </div>
    );
  }
}

export default CounterStateDefProps;
