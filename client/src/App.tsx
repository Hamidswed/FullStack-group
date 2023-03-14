import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/pages/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Box className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
