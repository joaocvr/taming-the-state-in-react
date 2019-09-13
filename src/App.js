import React from "react";
import ArchiveableList from "./1-localStateManagement/1.3-scalingLocalStateInReact/1.3.3-highOrderComponentes/ArchiveableList";
import SearchableList from "./1-localStateManagement/1.3-scalingLocalStateInReact/1.3.1-liftingState/SearchableList";
import CounterContainer from "./1-localStateManagement/1.3-scalingLocalStateInReact/1.3.2-functionalState/CounterContainer";
import A from "./1-localStateManagement/1.3-scalingLocalStateInReact/1.3.4-reactsContextForProviderAndConsumer/A";
import C from "./1-localStateManagement/1.3-scalingLocalStateInReact/1.3.4-reactsContextForProviderAndConsumer/C";

function App() {
  return (
    <div>
      <div id="capt1">
        <h1>1 Local State Management</h1>
        <h2>1.3 Scaling Local State In React</h2>
        <h3>1.3.1 Lifting State</h3>
        <SearchableList list={[{ name: "1", id: 1 }, { name: "2", id: 2 }]} />
        <h3>1.3.2 Functional State</h3>
        <CounterContainer />
        <h3>1.3.3 High Order Components</h3>
        <ArchiveableList list={[{ name: "3", id: 3 }, { name: "4", id: 4 }]} />
        <h3>1.3.4 React's Context for Provider and Consumer</h3>
        <A>
          <C />
        </A>
      </div>
      <div id="capt2">
        <h1>2. Redux</h1>
        <h2>2.1 </h2>
        <h3>2.1.1 </h3>
      </div>
    </div>
  );
}

export default App;
