import { styled, Button, IconButton, Badge, BadgeProps } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./NavBar.css";

function NavBar() {
  const LoginBTN = styled(Button)({
    color: "#fff",
    backgroundColor: "black",
    border: "1px solid #fff",
    padding: "5 20px",
    "&:hover": {
      backgroundColor: "#fff",
      color: "black",
      border: "1px solid black",
    },
  });

  const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    "& .MuiBadge-badge": {
      right: 6,
      top: 3,
      padding: "0 4px",
    },
  }));

  return (
<<<<<<< HEAD
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
=======
    <div className="navbar-container">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/all-recipes">All Recipes</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="navbar-center">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/favorites">
          <StyledBadge badgeContent="2" color="error">
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </StyledBadge>
        </Link>
        <Link to="/registration">Register</Link>
        <Link to="/login">
          <LoginBTN>Log In</LoginBTN>
        </Link>
      </div>
>>>>>>> 923e4e04188f6b30d6b142d134653e0b1369d379
    </div>
  );
}

export default NavBar;
