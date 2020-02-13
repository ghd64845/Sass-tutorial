import React from "react";
import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";
import StyledComponent from "./StyledComponent";

function App() {
  return (
    <div className="App">
      <SassComponent />
      <hr />
      <CSSModule />
      <hr />
      <StyledComponent />
    </div>
  );
}

export default App;
