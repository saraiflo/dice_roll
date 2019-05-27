import React, { Component } from "react";
import Die from "./Die";
import "./Roll_dice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", rolling: false };
    this.roll = this.roll.bind(this);
  }

  //pick two new rolls and set state with each new role
  roll() {
    const rolled1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const rolled2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    //updating state of the dice and the state of rolling
    this.setState({ die1: rolled1, die2: rolled2, rolling: true });

    //wait, once second then resetting state to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="Rolldice">
        <div className="Rolldice-container">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {" "}
          {this.state.rolling ? "Rolling...." : "Click to Roll!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
