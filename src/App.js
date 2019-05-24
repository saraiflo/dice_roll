import React, { Component } from "react";
// import Die from "./Die";
import Rolldice from "./Roll_dice";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rolldice />
      </div>
    );
  }
}

export default App;
