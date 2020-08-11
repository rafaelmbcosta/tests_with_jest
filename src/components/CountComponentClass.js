import React, { Component } from 'react'

class CountComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render () {
    return(
      <div data-test="count-component-class">
        <h1 data-test="counter-display-class">Here goes to counter {this.state.counter}</h1>
        <input
          data-test="increment-button-class"
          type="button"
          value="increase"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        />
      </div>
    );
  }
}

export default CountComponentClass;