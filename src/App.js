import React from "react";
// import logo from "./logo.svg";
// import { Navbar, NavbarBrand } from "reactstrap";
// import { DISHES } from "./shared/dishes";
import Main from "./components/MainComponent";
import "./App.css";
import { Component } from "react";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
 render() {
  return (
   <BrowserRouter>
    <div className="App">
     <Main />
    </div>
   </BrowserRouter>
  );
 }
}

export default App;
