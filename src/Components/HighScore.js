import React, { Component } from "react";

class HighScore extends Component {
  render() {
    if (this.props.overTen) {
      return (
        <div>
          <h3> You Reached high score 10 </h3>
        </div>
      );
    } else return null;
  }
}

export default HighScore;
