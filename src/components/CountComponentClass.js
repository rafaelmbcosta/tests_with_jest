import React, { Component } from 'react'

class CountComponentClass extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment() {
    // this.setState((state) => ({count: 2}))
  }

  render () {
    return(
      <div>
        <h1> Class counter component { this.state.count }</h1>
        <input type="button" value="increment" onClick={this.increment} />
      </div>

    );
  }
}

export default CountComponentClass;