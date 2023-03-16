import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
         <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/registration">Register</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/userInformation">UserInformation</Link>
        </li>
      </ul>
      </div>
     
      <div className="navbar-center">
        logo
      </div>
      <div className="navbar-right">
        right
      </div>
    </div>
  );
}

export default NavBar;
