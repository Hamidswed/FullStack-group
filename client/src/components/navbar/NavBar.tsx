import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipes">All Recipes</Link>
        </li>
        <li>
          <Link to="/registration">Register</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/foodDetail">RecipesInformation</Link>
        </li>
        <li>
          <Link to="/userInformation">UserInformation</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
