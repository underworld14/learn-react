import React, { Component } from "react";
import "./App.css";

import HighScore from "./Components/HighScore";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      overTen: false
    };
  }

  handleclick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleReset = () => {
    this.setState({ count: 0, overTen: false });
  };

  componentDidUpdate(props, state) {
    if (
      this.state.count > 10 &&
      this.state.count !== state.count &&
      !this.state.overTen
    ) {
      this.setState({ overTen: true });
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1> You Have Clicked {this.state.count} times </h1>
          <HighScore overTen={this.state.overTen} />

          <button variant="primary" onClick={this.handleclick}>
            Click Me
          </button>
          <button variant="warning" onClick={this.handleReset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
