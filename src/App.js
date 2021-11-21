import React from "react";
import "./App.css";
import logo from "./img/logo.png";
import Home from "./router/Home";
import About from "./router/About";
import Japan from "./router/Japan";
import Sale from "./router/Sale";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ProductUI from "./ProductUI";
function App(props) {
  return (
    <Router>
      <div className="container">
        <div>
          <img src={logo} alt="This is a logo" width="70px" />
        </div>
        <div className="menu">
          <Nav />
        </div>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/pro-ui" component={ProductUI} />
      <Route path="/fjapan" component={Japan} />
      <Route path="/sale" component={Sale} />
    </Router>
  );
}

export default App;
