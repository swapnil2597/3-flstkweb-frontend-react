import React from "react";
// import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "./shared/dishes";
import Menu from "./components/MenuComponent";
import "./App.css";
import { Component } from "react";

class App extends Component {
 constructor(props) {
  super(props);
  this.state = {
   dishes: DISHES,
  };
 }

 render() {
  return (
   <div className="">
    <Navbar dark color="primary">
     <div className="container">
      <NavbarBrand href="/">Swapnil's Restaurant</NavbarBrand>
     </div>
    </Navbar>
    <Menu dishes={this.state.dishes} />
   </div>
  );
 }
}

export default App;
