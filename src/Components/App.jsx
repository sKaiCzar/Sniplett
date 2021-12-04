import React from "react";
import Input from "./Input";
import Output from "./Output";
import { Consumer } from "./Context";

const App = () => (
  <Consumer>
    {context => (
      <div className={`app app--${context.state.mode}`}>
        <div className="app__main">
          <Input />
          <Output />
        </div>
      </div>
    )}
  </Consumer>
);

export default App;
