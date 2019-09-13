import React, { Component } from "react";
import ThemeContext from "./ThemeContext";

class C extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {coloredTheme => <div style={{ color: coloredTheme }}>C</div>}
      </ThemeContext.Consumer>
    );
  }
}

export default C;
