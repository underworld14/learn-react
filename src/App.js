import React, { Component } from "react";
import "./App.css";

import List from "./Components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTodo: "",
      todoItems: []
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    await this.setState({
      todoItems: [...this.state.todoItems, this.state.inputTodo],
      inputTodo: ""
    });
    console.log(this.state.todoItems);
  };

  handleInput = event => {
    this.setState({
      inputTodo: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} value={this.state.inputTodo} />
          <button> ADD </button>
        </form>

        <List todo={this.state.todoItems} />
      </div>
    );
  }
}

export default App;
