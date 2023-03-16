import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/">All Recipe</Link>
      </div>

      <div className="navbar-center">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbar-right">
        <Link to="/login">Log In</Link>
        <Link to="/registration">Register</Link>
      </div>
    </div>
  );
}

export default NavBar;
