import React, { Component } from "react";
import "./App.css";
import BandSearch from "./BandSearch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="title">Bands on Tour</h1>
        <BandSearch />
      </div>
    );
  }
}

export default App;
