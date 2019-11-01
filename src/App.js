import React, { Component } from "react";
import "./App.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.start
    };
  }

  componentDidMount() {
    this.timerStart = setInterval(() => this.incerease(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerStart);
  }

  incerease() {
    this.setState({
      time: parseInt(this.state.time) + 1
    });
  }

  render() {
    return (
      <div>
        <p> {this.state.time} detik </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Timer start="10" />
        <Timer start="0" />
      </div>
    );
  }
}

export default App;
