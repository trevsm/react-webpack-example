import React, { Component } from "react";
import Menu from "./Menu";
import Foot from "./Foot";
import "../styles/Main.scss";

class Main extends Component {
  render() {
    return (
      <>
        <Menu />
        <h1>this is the body</h1>
        <Foot />
      </>
    );
  }
}

export default Main;
