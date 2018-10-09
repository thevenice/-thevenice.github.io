import React, { Component } from "react";
// import Navbar from "./components/Layout/Navbar";
import MainPage from "./components/Layout/MainPage";
import "./App.css";
// import Hero from "./components/Layout/Hero";
// import Footer from "./Footer";
import SVG from "./assets/undraw_programming_2svr.js";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NotFound from "./components/Layout/NotFound";
// import About from "./components/Layout/About";

class App extends Component {
  render() {
    return (
      // <div className="App">
      <div className="wrapper">
        <SVG />
        <MainPage detailArray={this.props.detailArray} />
      </div>
      // </div>
    );
  }
}

export default App;
