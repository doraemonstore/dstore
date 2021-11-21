import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../img/logo.png";
import "./Header.css";
import Nav from "./Nav";

function Header(props) {
  return (
    <Router>
      <div className="container">
        <div>
          <img src={logo} alt="This is a logo" width="150px" />
        </div>
        <div className="menu">
            <Nav/>
    </div>
      </div>
    </Router>
  );
}

export default Header;
