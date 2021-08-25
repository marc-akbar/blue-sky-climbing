import React, { Component } from "react";
import Map from "./Map";
import "./App.css";

const defaultProps = {
  center: {
    lat: 40.014984,
    lng: -105.270546,
  },
  zoom: 14,
};

class App extends Component {
  render() {
    return <Map defaultProps={defaultProps} />;
  }
}

export default App;
