import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NameState from "./context/name/NameState";

const App = () => {
  return (
    <div className="App">
      <NameState>My App</NameState>
    </div>
  );
};

export default App;
