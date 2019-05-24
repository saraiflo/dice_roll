import React, { Component } from "react";
import Die from "./Die";
import "./Roll_dice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one" };
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
    this.setState({ die1: rolled1, die2: rolled2 });
  }

  render() {
    return (
      <div className="Rolldice">
        <div className="Rolldice-container">
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button onClick={this.roll}> Click to Roll!</button>
      </div>
    );
  }
}

export default RollDice;
