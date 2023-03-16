import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import UserInformation from "./pages/UserInformation";
import AddFood from "./pages/AddFood";
import UpdateFood from "./pages/UpdateFood";
import FoodInformation from "./pages/FoodInformation";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <Box className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userInformation" element={<UserInformation />} />
        <Route path="/addFood" element={<AddFood />} />
        <Route path="/updateFood" element={<UpdateFood />} />
        <Route path="/foodDetail" element={<FoodInformation />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
