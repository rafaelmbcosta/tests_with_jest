import React, { Component } from 'react'

class CountComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, error: false };
  }

  errorMessage() {
    return this.state.error ? 'Cannot be lower than 0' : '';
  }

  decreaseHandler() {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1, error: false })
    } else {
      this.setState({ counter: 0, error: true })
    }
  }

  render () {
    return(
      <div data-test="count-component-class">
        <h1 data-test="counter-display-class">Here goes to counter {this.state.counter}</h1>
        <h3 data-test="alert-text-class">{this.errorMessage()}</h3>
        <input
          data-test="increment-button-class"
          type="button"
          value="increase"
          onClick={() => this.setState({ counter: this.state.counter + 1, error: false })}
        />

        <input
          data-test="decrement-button-class"
          type="button"
          value="decrement"
          onClick={() => this.decreaseHandler()}
        />
      </div>
    );
  }
}

export default CountComponentClass;