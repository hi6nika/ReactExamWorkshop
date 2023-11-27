import "./assets/css/style.css";
import FeaturedCars from "./components/FeaturedCars";

import Home from "./components/Home";
import Register from "./components/Register"
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<FeaturedCars />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
