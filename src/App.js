import React from "react";
// import logo from "./logo.svg";
// import { Navbar, NavbarBrand } from "reactstrap";
// import { DISHES } from "./shared/dishes";
import Main from "./components/MainComponent";
import "./App.css";
import { Component } from "react";

class App extends Component {
 render() {
  return (
   <div className="App">
    <Main />
   </div>
  );
 }
}

export default App;
