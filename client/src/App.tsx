import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import UserInformation from "./pages/UserInformation";
import AddFood from "./pages/AddFood";
import UpdateFood from "./components/admin/updateFood/UpdateFood";
import FoodInformation from "./pages/FoodInformation";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./components/recipeDetail/RecipeDetail";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <Box className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/userInformation" element={<UserInformation />}></Route>
        <Route path="/addFood" element={<AddFood />}></Route>
        <Route path="/updateFood" element={<UpdateFood />}></Route>
        <Route path="/foodDetail" element={<FoodInformation />}></Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
