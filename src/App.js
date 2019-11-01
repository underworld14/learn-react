import React, { Component } from "react";
import "./App.css";

class OnClick extends Component {
  constructor() {
    super();
    this.state = {
      lamp: false
    };
  }

  handleClickLamp = () => {
    this.setState({
      lamp: !this.state.lamp
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleClickLamp()}>
          {this.state.lamp ? "ON" : "OFF"}
        </button>
        <p>
          {this.state.lamp ? "Kondisi Lampu Menyala" : "Kondisi Lampu Mati"}
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <OnClick />
      </div>
    );
  }
}

export default App;
