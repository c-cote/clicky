import React, { Component } from "react";
import "./Stats.css";


class Stats extends Component {
  state = {
    message: "",
    animating: false
  };

  componentWillReceiveProps({ score, topScore }) {
    let newState = { animating: true };
    if (score === 0 && topScore === 0) {
      newState.message = "";
    } else if (score === 0 && topScore > 0) {
      newState.message = "wrong";
    } else {
      newState.message = "right";
    }
    this.setState(newState, () =>
      setTimeout(() => this.setState({ animating: false }), 500)
    );
  }

  renderMessage = () => {
    switch (this.state.message) {
      case "right":
        return "Good - keep going!";
      case "wrong":
        return "Shucks, maybe next time...";
      default:
        return "To start the game, click an image!";
    }
  };

  render() {
    return (
      <li className={this.state.animating ? this.state.message : ""}>
        {this.renderMessage()}
      </li>
    );
  }
}

export default Stats;
