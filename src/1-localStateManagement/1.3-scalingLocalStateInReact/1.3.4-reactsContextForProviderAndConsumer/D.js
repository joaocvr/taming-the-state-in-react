import React from "react";
import ThemeContext from "./ThemeContext";

const D = () => {
  return (
    <ThemeContext.Consumer>
      {coloredTheme => <div style={{ color: coloredTheme }}>D</div>}
    </ThemeContext.Consumer>
  );
};

export default D;
