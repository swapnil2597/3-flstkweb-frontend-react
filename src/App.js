import React from "react";
// import logo from "./logo.svg";
// import { Navbar, NavbarBrand } from "reactstrap";
// import { DISHES } from "./shared/dishes";
import Main from "./components/MainComponent";
import "./App.css";
import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

class App extends Component {
 render() {
  return (
   <Provider store={store}>
    <BrowserRouter>
     <div className="App">
      <Main />
     </div>{" "}
    </BrowserRouter>{" "}
   </Provider>
  );
 }
}

export default App;
