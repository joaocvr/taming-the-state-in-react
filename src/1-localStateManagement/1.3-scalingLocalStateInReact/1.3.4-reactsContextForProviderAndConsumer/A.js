import React, { Component } from "react";
import ThemeContext from "./ThemeContext";
import D from "./D";

class A extends Component {
  render() {
    return (
      <ThemeContext.Provider value={"red"}>
        <D />
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default A;
